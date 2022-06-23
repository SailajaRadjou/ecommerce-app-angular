import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/Product';
import { PRODUCTS } from '../product/product-datas';

@Component({
  selector: 'app-display-category',
  templateUrl:'display-category.component.html',
  styleUrls: ['display-category.component.css','../product-list/product-list.component.css']
})
export class DisplayCategoryComponent implements OnInit {
 

  products: Product[];
  getProducts: Product[] | any = [];
  product: Product | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.products = PRODUCTS;
    const prodCategory = this.route.snapshot.paramMap.get('category');
    console.log("Category : "+prodCategory);
    
    this.products.forEach(product => {
      if (prodCategory == product.categorie) {
      this.getProducts.push(product);
       
      } 
       
    });
    console.table(this.getProducts);   
    
  }

}
