//import org.springframework.boot.SpringApplication;
import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

//@ComponentScan(value = "com.example.springboot.app")
//In spring boot java @ComponentScan is Annotation
//In typescript @Component is Decorator
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

//public class SpringBootApplication {
export class WelcomeComponent implements OnInit {

    //String message = "some welcome message";
    message: string = "some welcome message";
    welcomeMessageFromService : string = '';
    errorMessageFromService : string = '';
    name: string = ''

    //ActivatedRoute
    constructor(private route: ActivatedRoute, public service: WelcomeDataService) {

    }

    ngOnInit(): void {
        //COMPILATION ERROR IF
        //this.message = 5
        //typescript is strong type
        console.log(this.message);
        this.name = this.route.snapshot.params['name']
        console.log(this.name)
    }

    getWelcomeMessage() {
        console.log(this.service.executeHelloWorldBeanService());
        this.service.executeHelloWorldBeanService().subscribe(
            response => this.handleSuccessfulResponse(response)
            ,
            error => this.handleErrorResponse(error)
        );
        console.log("get welcome message")
    }

    getWelcomeMessage2() {
        console.log(this.service.executeHelloWorldBeanErrorService());
        this.service.executeHelloWorldBeanErrorService().subscribe(
            response => this.handleSuccessfulResponse(response)
            ,
            error => this.handleErrorResponse(error)
        );
        console.log("get welcome message")
    }

    handleSuccessfulResponse(response: any) {
        this.welcomeMessageFromService = response.message;
        console.log("response : " + response);
        console.log("response.message : " + response.message);
    }

    handleErrorResponse(error: any) {
        console.log(error);
        this.errorMessageFromService = error.error.message
    }
}

// }
