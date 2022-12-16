import { Component } from '@angular/core';

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

  eventBindingOfLoginOrHandleLogin(){
    console.log(this.username);
    if (this.username === "username1" && this.password === "password1") {
    console.log("login success match")
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
