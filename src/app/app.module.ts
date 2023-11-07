// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, ProductListComponent, ProductSearchComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
