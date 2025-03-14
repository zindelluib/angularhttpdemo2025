import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }

  getProductInfo(id: any) {
    return this.http.get(`http://localhost:5000/api/products/${id}`);
  }
}
