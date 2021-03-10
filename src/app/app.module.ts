import { HomeComponent } from './home/pages/home/home.component';
import { CategoriesComponent } from './home/pages/home/categories/categories.component';
import { ArticlesComponent } from './home/pages/home/articles/articles.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http';
import { Article1Component } from './home/pages/home/article1/article1.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    CategoriesComponent,
    Article1Component,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
