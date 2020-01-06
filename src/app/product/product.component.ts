import { Router } from '@angular/router';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(router: Router, private productService: ProductService) {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }
}
