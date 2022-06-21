import { Component, OnInit } from '@angular/core';
import { Product } from './product/Product';
import { PRODUCTS } from './product/product-datas';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  
  title = 'This is my first E-commerce App using Angular';
  name = 'Sailaja Radjou';
  age: number;
  products: Product[];

  ngOnInit(): void {
    this.products = PRODUCTS;
    console.table(this.products);
    //this.products.forEach(console.log);
    
  }
}
