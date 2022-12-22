import {Injectable} from '@angular/core';
import {HelloWorldBean} from "./data/welcome-data.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
import {API_URL} from "../app.constants";

export class AuthenticationBean {
    constructor(public message: string) {
    }
}

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    constructor(private http: HttpClient) {
    }

    executeAuthenticationService(username: string, password: string) {
        let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
        let header = new HttpHeaders({
            Authorization: basicAuthHeaderString
        })
        return this.http.get<AuthenticationBean>(API_URL + `/basicauth`, {headers: header})
            .pipe(map(
                data => {
                    sessionStorage.setItem(AUTHENTICATED_USER, username);
                    sessionStorage.setItem(TOKEN, basicAuthHeaderString);
                    return data;
                }
            ));
    }

    getAuthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    }

    getAuthenticatedToken() {
        return sessionStorage.getItem(TOKEN);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER)
        return !(user === null)
    }

    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER)
        sessionStorage.removeItem(TOKEN)
    }
}
