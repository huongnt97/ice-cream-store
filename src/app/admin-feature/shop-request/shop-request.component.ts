import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from './../../service/message.service';

@Component({
  selector: 'app-shop-request',
  templateUrl: './shop-request.component.html',
  styleUrls: ['./shop-request.component.css']
})
export class ShopRequestComponent implements OnInit {
  userRequests: User[];
  show = '';
  constructor(
    private userService: UserService,
    private spiner: NgxSpinnerService,
    private msg: MessageService
  ) { }

  ngOnInit() {
    this.spiner.show();
    this.userService.getUserRequest().subscribe(
      res => {
        this.userRequests = res;
        this.spiner.hide();
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
