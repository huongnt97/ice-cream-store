import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { UserList } from '../models/userList.model';
const API = 'https://ice-cream-backend.herokuapp.com/user';
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const body = JSON.stringify(localStorage.getItem('user'));
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  changeProfile(profile: {}) {
    return this.http.put<User>(API, 'update', profile);
  }
  getUserRequest(): Observable<User[]> {
    return this.http.get<User[]>(API + '/get-user-register');
  }
  approveRequest(id: number) {
    return this.http.post(API + '/author?id=' + id, '');
  }
  getAllUser(pageNumber: number, search: string): Observable<UserList> {
    return this.http.get<UserList>(API + '?keyword=' + search + '&page=' + pageNumber);
  }
  changePassword(password: { old_password, new_password }) {
    return this.http.post(API + '/change-password?old_password=' + password.old_password + '&new_password=' + password.new_password, '');
  }
}
