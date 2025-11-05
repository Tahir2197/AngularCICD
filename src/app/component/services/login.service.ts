import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // baseUrl = 'https://localhost:44339'  //webapi host url
  // constructor(private http: HttpClient) { }  
  // httpOptions = {  
  //   headers: new HttpHeaders({  
  //     'Content-Type': 'application/json'  
  //   })  
  // }    

  post(data: any) {
    // return this.http.post<any>(`${this.configs.APIURL}/api/user/authenticate`, { username, password })
    //   .pipe(map((user: User) => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       if ((user.userRole || []).find(role => role.roleID === Roles.SYSADM)) {
    //         this.setAdminUser(user);
    //       }
    //       this.currentUserSubject.next(user);
    //     }
    //     return user;
    //   }));
  }
  
}
