import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  profile = 'Profile';
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      let data = JSON.parse(localStorage.getItem('user'));
      this.profile = data.name;

    }
  }
  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }
  }
}
