import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {

 
  constructor(private cartService: CartService) { }
  items = this.cartService.getItems();
  total = this.cartService.totalAmount();
  ngOnInit(): void {
    
  }
  isShown: boolean = false ; // hidden by default


 show() {
  
  this.isShown = ! this.isShown;
}

}
