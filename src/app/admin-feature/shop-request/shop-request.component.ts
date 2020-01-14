import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-shop-request',
  templateUrl: './shop-request.component.html',
  styleUrls: ['./shop-request.component.css']
})
export class ShopRequestComponent implements OnInit {
  userRequests: User[];
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    //const account = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserRequest().subscribe(
      res => {
        //this.userRequests = res;
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {
      }
    );
  }

}
