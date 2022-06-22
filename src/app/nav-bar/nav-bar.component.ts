import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  inputSearch: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome() :void{
    this.router.navigate(['productlist']);
  }

  searchProduct(){
    console.log(this.inputSearch);
    
    //this.products = PRODUCTS;
    this.router.navigate(['productdetail/', this.inputSearch]);
    // .then(() => {
    //   window.location.reload();
    // });
    
  }

}
