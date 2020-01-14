import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from './../service/notice.service';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  notice = '0';
  constructor(
    private router: Router,
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.noticeService.currentMessage.subscribe(message => this.notice = message);
  }
  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }
  }
}
