import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: 'productlist', component: ProductListComponent},
  {path: 'offerlist', component: OfferListComponent},
  {path: 'productdetail/:id', component: ProductDetailComponent},
  {path: 'category/:category', component: DisplayCategoryComponent},
  {path: '', redirectTo: 'productlist', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
