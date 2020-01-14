import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MessageService } from '../../service/message.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductList } from './../../models/productlist.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  productList: ProductList;
  formProduct = new FormControl({
    selectProduct: new FormControl(''),
    quantity: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(
    router: Router,
    private productService: ProductService,
    private msg: MessageService
  ) {
  }

  ngOnInit() {
     this.productService.getProductOfStore().subscribe(res => {
      this.productList = res;
    },
      ({ err }) => { });
  }
  search() {
    this.msg.showSuccess('Search successful');
  }
  onSubmit() {

  }
}
