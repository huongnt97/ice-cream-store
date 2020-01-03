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
  isReadonly = true;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProductId(id);
  }
  onChanges() {
    this.isReadonly = !this.isReadonly;

  }
}
