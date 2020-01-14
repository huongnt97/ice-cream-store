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
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.auth.getToken(),
        })
      }

      );
    }

    return next.handle(request);
  }
}
