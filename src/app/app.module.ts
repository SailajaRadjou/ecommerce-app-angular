import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { BorderCardDirective } from './border-card.directive';

import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferRatePipe } from './offer-rate.pipe';
import { CartComponent } from './cart/cart.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    NavBarComponent,
    DisplayCategoryComponent,
    BorderCardDirective,    
    OfferListComponent, 
    OfferRatePipe, 
    CartComponent,
    FormValidationComponent,
    ConfirmationComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
