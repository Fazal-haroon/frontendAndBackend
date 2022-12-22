import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "../basic-authentication.service";

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

    constructor(private basicAuthenticationService: BasicAuthenticationService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = this.basicAuthenticationService.getAuthenticatedUser()
        let token = this.basicAuthenticationService.getAuthenticatedToken()
        if (user && token) {
            request = request.clone({
                    setHeaders: {
                        Authorization: token
                    }
                }
            )
        }
        return next.handle(request);
    }
}
