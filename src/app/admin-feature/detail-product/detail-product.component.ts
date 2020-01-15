import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
const API = 'https://ice-cream-backend.herokuapp.com/product';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: Product;
  isReadonly = true;
  edit = 'Edit';
  isClicked = false;
  detailProductForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.spinner.show();
    let id = +this.activatedRoute.snapshot.params.id;
    this.productService.getProductById(id).subscribe(
      res => {
        this.product = res;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        });
        this.detailProductForm = this.formBuilder.group({
          image: [this.product.images],
          product_name: [this.product.product_name, Validators.required],
          description: [this.product.description, Validators.required],
          price: [this.product.price, [Validators.required]],
        });
      },
      err => {

      }
    );

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
  onSubmit() {
    console.log('Click');
  }
}
