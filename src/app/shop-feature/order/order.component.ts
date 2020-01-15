import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/service/notice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  available = 0;
  deliver = 0;

  constructor(
    private noticeService: NoticeService,
  ) { }

  ngOnInit() {

  }
  confirm() {
    this.available = 50;
  }
  finish() {
    this.deliver = 50;
  }
}
