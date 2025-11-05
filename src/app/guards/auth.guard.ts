import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      }
      else{
        if(route.data['role'] == localStorage.getItem('role')){
        return this.auth.isLoggedIn();
      }else{
        return false;
      }
      }
      
    } 
}
