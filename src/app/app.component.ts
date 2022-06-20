import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'This is my first E-commerce App using Angular';
  name = 'Sailaja Radjou';
  age: number;
  product: string[] = ['Candle', 'Bag', 'Plates', 'Baskets'];
}
