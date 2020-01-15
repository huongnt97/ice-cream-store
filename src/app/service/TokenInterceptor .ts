import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json' ,
          Authorization: currentUser.token,
        })
      }

      );
    }
    return next.handle(request);
  }
}
