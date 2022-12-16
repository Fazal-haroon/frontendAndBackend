import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string = 'username1'
  password : string = 'password1'
  errorMessage : string = 'Invalid Credentials Msg'
  invalidLogin : boolean = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router : Router) {
  }

  eventBindingOfLoginOrHandleLogin(){
    console.log(this.username);
    if (this.username === "username1" && this.password === "password1") {
    console.log("login success match")
      //Redirect to welcome page
      this.router.navigate(['welcome'])
      this.invalidLogin = false
      console.log(this.invalidLogin)
    } else {
      this.invalidLogin = true
      console.log(this.invalidLogin)
    }
    // console.log(this.password)
    // console.log("password also match")
  }
}
