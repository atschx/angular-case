import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  logWithUsernameAndPassword(username: String,password: String): boolean{
    if(username=='albert'){
      return true;
    }
    return false;
  }

}
