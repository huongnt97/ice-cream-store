import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserList } from 'src/app/models/userList.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pageNumber = 1;
  totalpage: number;
  pages = [];
  listUser: UserList;
  active = 0;
  searchUser = '';
  disabled = '';
  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getListUser(this.pageNumber);
  }
  onClick(index: number) {
    this.active = index;
  }
  getListUser(page: number) {
    this.pageNumber = page;
    this.spinner.show();
    this.userService.getAllUser(page, this.searchUser).subscribe(
      res => {
        this.listUser = res;
        console.log(this.searchUser);
        this.totalpage = this.listUser.totalPages;
        this.pages = this.productService.getPages(this.totalpage);
        this.spinner.hide();
        this.active = page - 1;
      },
      err => {
        this.spinner.hide();
      }
    );
  }
  onSearchUser(search: string) {
    this.searchUser = search;
    this.pageNumber = 1;
    this.getListUser(this.pageNumber);

  }
  previous() {
    if (this.pageNumber - 1 > 0) {
      this.active = this.active - 1;
      this.pageNumber = this.pageNumber - 1;
      this.getListUser(this.pageNumber);
    } else {
    }
  }
  next() {
    if (this.pageNumber + 1 <= this.totalpage) {
      this.active = this.active + 1;
      this.pageNumber = this.pageNumber + 1;
      this.getListUser(this.pageNumber);
    } else {
    }
  }
}
