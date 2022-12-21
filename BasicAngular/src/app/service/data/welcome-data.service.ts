import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class HelloWorldBean{
    constructor(public message : string) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class WelcomeDataService {

    constructor(private http : HttpClient) {
    }

    executeHelloWorldBeanService() {
        return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean')
        // console.log("Execute Hello World Bean Service")
    }

    executeHelloWorldBeanErrorService(){
        return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean2')
    }

    executeHelloWorldBeanPathVariableService(name:any){
        return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world/path-variable/${name}`)
    }

}
