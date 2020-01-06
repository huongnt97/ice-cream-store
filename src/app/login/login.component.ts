import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../models/user.model';
const API: string = 'https://fakerestapi.azurewebsites.net/api/Users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  constructor(private router: Router, private userService: UserService) { }
  username: string;
  password: string;
  condition: boolean;
  ngOnInit() {
    this.checkLogin();
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  checkLogin() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['home/dashboard']);
    } else {
      this.router.navigate(['login']);
    }
  }
  login(): void {
    this.users.forEach(element => {
      if (element.username === this.username && element.password === this.password) {
        this.condition = false;
        localStorage.setItem('user', JSON.stringify(element));
        this.router.navigate(['home/dashboard']);
      } else {
        this.condition = true;
      }
    });

  }
}

