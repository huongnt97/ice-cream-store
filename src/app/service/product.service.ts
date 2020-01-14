import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductList } from './../models/productlist.model';
const API = 'https://ice-cream-backend.herokuapp.com/product';
const API1 = 'https://ice-cream-backend.herokuapp.com/product?page=';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  pages = [];
  constructor(private http: HttpClient) {

  }
  getProduct(pageNumber: number) {
    return this.http.get<ProductList>(API1 + pageNumber);
  }
  getProductById(id): Observable<Product> {
    return this.http.get<Product>(API + '/' + id);
  }
  getPages(totalPages: number) {
    this.pages = [];
    for (let i = 1; i <= totalPages; i++) {

      this.pages.push(i);
    }
    return this.pages;
  }
}
