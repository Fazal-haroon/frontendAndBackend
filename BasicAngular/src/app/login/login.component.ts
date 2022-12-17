import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string = 'username1'
  password : string = 'password1'
  errorMessage : string = 'Invalid Credentials Msg'
  invalidLogin : boolean = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router : Router, public hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  eventBindingOfLoginOrHandleLogin(){
    console.log(this.username);
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
    console.log("login success match")
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
      console.log(this.invalidLogin)
    } else {
      this.invalidLogin = true
      console.log(this.invalidLogin)
    }
    // console.log(this.password)
    // console.log("password also match")
  }

  ngOnInit(): void {
  }
}
