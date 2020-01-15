import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { NoticeService } from './../../service/notice.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  profile = 'Profile';
  user: User;
  notice = '0';
  constructor(
    private router: Router,
    private noticeService: NoticeService,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      const data = JSON.parse(localStorage.getItem('user'));
      this.profile = data.full_name;
    }
    this.noticeService.currentMessage.subscribe(message => this.notice = message);
  }
  logout() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user && this.user.token) {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }
  }
}
