import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './product-detail.service';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product : any;
  
  constructor(private route : ActivatedRoute , private productDetailService : ProductDetailService) {
    this.product =  {};
  }

  ngOnInit(){
    let productID  = this.route.snapshot.paramMap.get('id');
    this.productDetailService.getProductInfo(productID).subscribe( res => {
      this.product  = res;
    });
  }


}
