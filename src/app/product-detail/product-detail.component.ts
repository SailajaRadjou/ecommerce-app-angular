import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product[];
  currentProduct: Product | undefined;
    
  constructor(private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit(): void {
    this.products = PRODUCTS;
    const prodId = this.route.snapshot.paramMap.get('id');
    console.log("Product id : "+prodId);
    for (let i = 0; i < this.products.length; i++) {
      if (Number(prodId) == this.products[i].id) {
        this.currentProduct = this.products[i];
        console.log("Product Name : "+this.products[i].nom);
        
      }
      
    }
    
  }
  goHome() : void{
    this.location.back();
  }
  

}
