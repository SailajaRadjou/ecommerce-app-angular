import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  constructor(private route: Router) { }  

  ngOnInit(): void {
    this.products = PRODUCTS;
    console.table(this.products);
    //this.products.forEach(console.log);
    
  } 
  goToProduct(product: Product){
    this.route.navigate(['productdetail/', product.id]);
  }
}
