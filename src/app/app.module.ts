import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BulticstoreAppComponent } from './components/bulticstore-app/bulticstore-app.component';
import { FiltersComponent } from './components/bulticstore-app/filters/filters.component';
import { ProductListComponent } from './components/bulticstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bulticstore-app/product-list/product-item/product-item.component';
import { BooksServices } from './components/bulticstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BulticstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
