//import org.springframework.boot.SpringApplication;
import { Component } from '@angular/core';
import {AppComponent} from '../app.component';

//@ComponentScan(value = "com.example.springboot.app")
//In spring boot java @ComponentScan is Annotation
//In typescript @Component is Decorator
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
    //COMPILATION ERROR IF
    //this.message = 5
    //typescript is strong type
    console.log(this.message);
  }

}
// }
