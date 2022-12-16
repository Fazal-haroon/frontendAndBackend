//import org.springframework.boot.SpringApplication;
import { Component } from '@angular/core';
import {AppComponent} from '../app.component';

//@ComponentScan(value = "com.example.springboot.app")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootApplication {
export class WelcomeComponent {

  //String message = "some welcome message";
  message : string = "some welcome message";

  constructor() {
    console.log(this.message);
  }

}
// }
