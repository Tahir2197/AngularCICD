import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //constructor(){}
  //private apiUrl = environment.apiUrl; //webapi host url
  constructor(private http: HttpClient) { }  
  
  // getData(){      
  //   return this.http.get(this.apiUrl + 'api/registration/getUser');   
  // }  

  // post(data: any) {
  //   return this.http.post(this.apiUrl + "api/registration/saveUser", data);
  // }
 
}

