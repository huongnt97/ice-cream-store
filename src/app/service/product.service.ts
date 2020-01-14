import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductList } from './../models/productlist.model';
const API = 'https://ice-cream-backend.herokuapp.com/product';
const API_STORE = 'https://ice-cream-backend.herokuapp.com/storehave';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  pages = [];
  constructor(private http: HttpClient) {

  }
  getProduct(search: string, pageNumber: number) {
    return this.http.get<ProductList>(API + '?keyword=' + search + '&page=' + pageNumber);
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
  getProductOfStore() {
    return this.http.get<ProductList>(API_STORE);
  }
}
