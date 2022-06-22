import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';

@Component({
  selector: 'app-display-category',
  templateUrl:'display-category.component.html',
  styles: [
  ]
})
export class DisplayCategoryComponent implements OnInit {
 

  products: Product[];
  getProducts: Product[] | any;
  product: Product;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.products = PRODUCTS;
    const prodCategory = this.route.snapshot.paramMap.get('category');
    console.log("Category : "+prodCategory);
    
    this.products.forEach(product => {
      if (prodCategory == product.categorie) {
      this.getProducts=product;
       console.table(this.getProducts);
      }  
    });

    // for (let i in this.products) {
    //   if (prodCategory == this.product[i].categorie) {
    //       this.getProducts.push(this.product[i]);
    //        console.log(this.getProducts);
    //       }  
    // }
    
  }

}
