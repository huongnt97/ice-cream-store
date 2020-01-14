import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { MessageService } from 'src/app/service/message.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductList } from './../../models/productlist.model';
@Component({
  selector: 'app-product-mangement',
  templateUrl: './product-mangement.component.html',
  styleUrls: ['./product-mangement.component.css']
})
export class ProductMangementComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  products: Product[];
  productList: ProductList;
  pageNumber = 1;
  totalPages: number;
  pages = [];
  active = 0;
  search = '';
  isSearch = false;
  constructor(
    router: Router,
    private productService: ProductService,
    private msg: MessageService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit() {

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
    this.spinner.show();
    this.productService.getProduct(this.search, this.pageNumber).subscribe(res => {
      this.productList = res;
      this.totalPages = this.productList.totalPages;
      this.pages = this.productService.getPages(this.totalPages);
      setTimeout(() => {
        this.spinner.hide();
      });
    },
      ({ err }) => { });
  }
  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
  }
  getList(page: number) {
    this.pageNumber = page;
    this.spinner.show();
    this.productService.getProduct(this.search, page).subscribe(res => {
      this.productList = res;
      this.totalPages = this.productList.totalPages;
      this.pages = this.productService.getPages(this.totalPages);
      this.spinner.hide();
      this.onClick(page - 1);
    },
      ({ err }) => { });
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
  get formAddProduct() { return this.productForm.controls; }
  getListProductByName(data: string) {
    this.search = data;
    this.pageNumber = 1;
    this.getList(this.pageNumber);
  }
}
