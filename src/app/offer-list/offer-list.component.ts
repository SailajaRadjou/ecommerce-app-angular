import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';

@Component({
  selector: 'app-offer-list',
  templateUrl: 'offer-list.component.html',
  styleUrls: ['offer-list.component.css','../product-list/product-list.component.css']
})
export class OfferListComponent implements OnInit {

  products: Product[];
  getOffers: Product[] | any = [];
  product: Product | undefined;  
  
  constructor(private route: Router) { }
  
  ngOnInit(): void {
    this.products = PRODUCTS;
    this.products.forEach(product => {
      if (product.offer) {
      this.getOffers.push(product);       
      } 
       
  });
    console.table(this.getOffers);     
  }

  goToProduct(product: Product){
    this.route.navigate(['productdetail/', product.id]);
  }
}
