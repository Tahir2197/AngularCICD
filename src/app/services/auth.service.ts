import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
   
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {  
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin' && password === 'admin') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      localStorage.setItem('role', 'admin');
      return of({ name: 'Admin User', email: 'admin', role: 'admin' });
    }
    if (email === 'user' && password === 'user') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      localStorage.setItem('role', 'user');
      return of({ name: 'Bhushan Ahire', email: 'user', role: 'user' });
    }
    return throwError(new Error('Failed to login'));
  }
}