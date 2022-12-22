import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
        let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        let header = new HttpHeaders({
                Authorization: basicAuthHeaderString
            }
        )
        return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean',{headers:header})
        // console.log("Execute Hello World Bean Service")
    }

    executeHelloWorldBeanErrorService() {
        let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        let header = new HttpHeaders({
                Authorization: basicAuthHeaderString
            }
        )
        return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean2',{headers:header})
    }

    executeHelloWorldBeanPathVariableService(name: any) {
        let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        let header = new HttpHeaders({
                Authorization: basicAuthHeaderString
            }
        )
        return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world/path-variable/${name}`,{headers:header})
    }

    createBasicAuthenticationHttpHeader() {
        let username = 'user'
        let password = 'user'
        let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
        return basicAuthHeaderString;
    }

}
