import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MessageService } from '../../service/message.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductList } from './../../models/productlist.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  productList: ProductList;
  pageNumber = 1;
  totalPages: number;
  pages = [];
  active = 0;
  search = '';
  isSearch = false;
  user: User;
  formProduct = new FormControl({
    selectProduct: new FormControl(''),
    quantity: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(
    router: Router,
    private productService: ProductService,
    private msg: MessageService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.getList(this.pageNumber);
  }

  onSubmit() {

  }
  getList(page: number) {
    this.pageNumber = page;
    this.spinner.show();
    this.user = JSON.parse(localStorage.getItem('user'));

    this.productService.getProductOfStore(this.user.id, page).subscribe(res => {
      //console.log(res);
      this.productList = res;
      if (this.productList) {
        this.totalPages = this.productList.totalPages;
        this.pages = this.productService.getPages(this.totalPages);
      }
      this.spinner.hide();
      this.onClick(page - 1);
    },
      err => {
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }

    );
  }
  previousPage() {
    if (this.pageNumber - 1 > 0) {
      this.active = this.active - 1;
      this.pageNumber = this.pageNumber - 1;
      this.getList(this.pageNumber);
    }
  }
  nextPage() {
    if (this.pageNumber + 1 <= this.totalPages) {
      this.active = this.active + 1;
      this.pageNumber = this.pageNumber + 1;
      this.getList(this.pageNumber);
    }
  }
  onClick(index: number) {
    this.active = index;
  }
  getListProductByName(data: string) {
    this.search = data;
    this.pageNumber = 1;
    this.getList(this.pageNumber);
  }
}
