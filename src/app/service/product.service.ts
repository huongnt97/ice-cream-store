import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../models/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor() {

  }
  getProduct(): Product[] {
    return PRODUCTS;
  }
  getProductId(id: number) {
    this.products = this.getProduct();
    let result = null;
    this.products.forEach(element => {
      if (element.productId === id) {
        result = element;
        console.log(result + "result");
        return result;

      }
    });
    return result;
  }
}
