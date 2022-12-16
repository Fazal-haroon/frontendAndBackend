//import org.springframework.boot.SpringApplication;
import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {ActivatedRoute} from "@angular/router";

//@ComponentScan(value = "com.example.springboot.app")
//In spring boot java @ComponentScan is Annotation
//In typescript @Component is Decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootApplication {
export class WelcomeComponent implements OnInit{

  //String message = "some welcome message";
  message : string = "some welcome message";
  name:string = ''

  //ActivatedRoute
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    //COMPILATION ERROR IF
    //this.message = 5
    //typescript is strong type
    console.log(this.message);
    this.name = this.route.snapshot.params['name']
    console.log(this.name)
  }

}
// }
