import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    //instantiate nung service
    constructor(private authenticationService: AuthenticationService){}
    //listens for request errors 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout(); //disable muna fre
                // reloads page
                location.reload(true);
            }
            //shows error message
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}