import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
const API = 'http://www.mocky.io/v2/5e1183c43100005400593eee';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor(private http : HttpClient) {

  }
  getProduct(){
    return this.http.get<Product[]>(API);
  }
}
