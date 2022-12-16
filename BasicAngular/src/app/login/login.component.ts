import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string = 'username1'
  password : string = 'pass1'

  eventBindingOfLoginOrHandleLogin(){
    console.log(this.username);
    console.log("login success matach")
    console.log(this.password)
    console.log("password also match")
  }
}
