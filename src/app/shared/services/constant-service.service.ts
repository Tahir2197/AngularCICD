import { Injectable } from '@angular/core';

@Injectable()
export class ConstantServiceService {
  public static APIURL = {
    Master: {
      UserRegistration: 'api/master/country',
    }
    
  };
}
