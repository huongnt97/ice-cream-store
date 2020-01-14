import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from './../../service/message.service';
import { NoticeService } from './../../service/notice.service';

@Component({
  selector: 'app-shop-request',
  templateUrl: './shop-request.component.html',
  styleUrls: ['./shop-request.component.css']
})
export class ShopRequestComponent implements OnInit {
  userRequests: User[];
  show = '';
  message: string;
  constructor(
    private userService: UserService,
    private spiner: NgxSpinnerService,
    private msg: MessageService,
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.spiner.show();
    this.userService.getUserRequest().subscribe(
      res => {
        this.userRequests = res;
        this.message = this.userRequests.length + '';
        this.spiner.hide();
        this.noticeService.updateNotice(this.message);
      },
      err => {
        console.log(err);
      },
      () => {
      }
    );
  }
  approve(id: number) {
    this.msg.showSuccess('Approve successful');
    this.show = 'modal';
  }
}
