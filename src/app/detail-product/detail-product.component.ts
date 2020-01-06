import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: Product;
  products: Product[];
  isReadonly = true;
  edit = 'Edit';
  isClicked = false;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.params.id;
    this.productService.getProduct().subscribe(data => {
      this.products = data;
      this.products.forEach(element => {
        if (element.productId === id) {
          this.product = element;
        }
      });

    });
  }
  onChanges() {
    this.isReadonly = !this.isReadonly;
    if (this.edit === 'Save') {
      this.edit = 'Edit';
      this.isClicked = false;
    } else {
      this.edit = 'Save';
      this.isClicked = true;
    }
  }
}
