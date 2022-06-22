import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  category: string;
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

  getCategory(categ: any){
    console.log(categ.name);
    this.router.navigate(['category/', categ.name]);
  }

}
