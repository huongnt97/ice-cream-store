import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../models/role';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
const API = 'https://ice-cream-backend.herokuapp.com/user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  currentUser: BehaviorSubject<User>;
  user: Observable<User>;
  constructor(private http: HttpClient, private msg: MessageService) {
    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));//get the last value
    this.user = this.currentUser.asObservable();
  }
  login(account: {}) {
    return this.http.post(API + '/login', account, { responseType: 'text' });
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  register(acountRegister: {}) {
    return this.http.post(API, acountRegister, { responseType: 'text' });
  }
}
