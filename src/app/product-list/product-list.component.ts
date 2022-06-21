import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  constructor() { }  

  ngOnInit(): void {
    this.products = PRODUCTS;
    console.table(this.products);
    //this.products.forEach(console.log);
    
  }

}
