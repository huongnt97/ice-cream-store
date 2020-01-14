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
      const data = JSON.parse(localStorage.getItem('user'));
      this.profile = data.full_name  ;
      //console.log(data);
    }
  }
  logout() {
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
