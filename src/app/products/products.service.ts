import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:5000/api/products/')
  }

  getProduct(id:string){
    return this.http.get(`http://localhost:5000/api/products/${id}`)
  }

  deleteProduct(id: string){
    return this.http.delete(`http://localhost:5000/api/products/${id}`)
  }
}
