import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required]],
      image: [null]
    });
    this.getList(this.pageNumber);
  }
  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('product_name', this.productForm.get('product_name').value);
    formData.append('description', this.productForm.get('description').value);
    formData.append('price', this.productForm.get('price').value);
    formData.append('image', this.productForm.get('image').value);
    console.log(formData.get('product_name'));
    this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log(res);
        this.pageNumber = 1;
        this.getList(this.pageNumber);
        this.msg.showSuccess('Add successful');
      },
      err => {
        console.log(err);
        this.msg.showError('Add fail');
      }
    );
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
      err => {
        this.spinner.hide();
        this.msg.showError('Somthing wrong');
      },
      () => {
        this.spinner.hide();
        //this.msg.showError(' wrong');
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
  get formAddProduct() { return this.productForm.controls; }
  getListProductByName(data: string) {
    this.search = data;
    this.pageNumber = 1;
    this.getList(this.pageNumber);
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.productForm.patchValue({
      image: file
    });
    this.productForm.get('image').updateValueAndValidity();
  }
}
