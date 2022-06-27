import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: 'form-validation.component.html' ,
  styleUrls: ['form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  name: string;
  fname: string;
  lname: string;
  email: string;
  city: string;
  zip: string;
  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.fname);
    console.log(this.lname);
    this.name =  this.fname+" "+this.lname;
    this.cartService.clearCart();
    this.route.navigate(['confirmation/',this.name]);
    
  }
}