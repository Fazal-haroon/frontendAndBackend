import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constants";

export class HelloWorldBean {
    constructor(public message: string) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class WelcomeDataService {

    constructor(private http: HttpClient) {
    }

    executeHelloWorldBeanService() {
        return this.http.get<HelloWorldBean>(API_URL+'/hello-world-bean')
        // console.log("Execute Hello World Bean Service")
    }

    executeHelloWorldBeanErrorService() {
        return this.http.get<HelloWorldBean>(API_URL+'/hello-world-bean2')
    }

    executeHelloWorldBeanPathVariableService(name: any) {
        return this.http.get<HelloWorldBean>(API_URL+`/hello-world/path-variable/${name}`)
    }


}
