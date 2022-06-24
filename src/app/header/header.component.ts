import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  product: Product[];
  inputSearch: number;
  someSubscription: any;
  constructor(private router: Router, private cartservice: CartService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Here is the dashing line comes in the picture.
        // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
        this.router.navigated = false;
      }
    });

   }
   ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.product = PRODUCTS;
  }

  goHome() :void{
    this.router.navigate(['productlist']);
  }  

  itemCount(){
    return this.cartservice.itemsCount();
  }

}
