import { Injectable } from '@angular/core';
import { Product } from '../product/Product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  total: number = 0;
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  totalAmount(){
    this.items.map(value =>{
      this.total = this.total + value.reduction;
   });
    return this.total;
  }
  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
function item(item: any, items: Product[]) {
  throw new Error('Function not implemented.');
}

