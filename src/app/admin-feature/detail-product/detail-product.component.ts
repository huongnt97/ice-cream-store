import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgxSpinnerService } from 'ngx-spinner';

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
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinner: NgxSpinnerService
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
}
