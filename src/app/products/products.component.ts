import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [NgFor,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
  constructor(private productsService: ProductsService) {}

  ngOnInit(){
    this.loadProducts();
  }

  loadProducts(){
    this.productsService.getProducts().subscribe( res => {
      this.products  = res;
    })
  }

  deleteProduct(id: string){
    let shouldDelete =  confirm("Are you sure you want to delete this product?")
    if(shouldDelete){
     this.productsService.deleteProduct(id).subscribe( res => {
      alert('Product deleted')
      this.loadProducts()
     })
    }
    
  }
}
