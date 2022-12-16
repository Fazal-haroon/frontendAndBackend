import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password: string){
    if (username === "username1" && password === "password1"){
    return true;
    }
    return false;
  }
}
