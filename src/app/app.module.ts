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
import { ProductTypeColorPipe } from './product-type-color.pipe';


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
    ProductTypeColorPipe,
   
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
