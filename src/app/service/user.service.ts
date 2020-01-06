import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/user.model';
const API: string = 'http://www.mocky.io/v2/5e1194123100004f00593f16';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>(API);
  }
}
