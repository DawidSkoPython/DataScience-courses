import { HomeComponent } from './home/pages/home/home.component';
import { CategoriesComponent } from './home/pages/home/categories/categories.component';
import { ArticlesComponent } from './home/pages/home/articles/articles.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './article/comments/comments.component';
import { SectionComponent } from './article/section/section.component';
import { CommentFormComponent } from './article/comments/comment-form/comment-form.component';
import { AboutusComponent } from './home/pages/aboutus/aboutus.component';
import { ArticlesPageComponent } from './home/pages/articles-page/articles-page.component';
import { ContactusComponent } from './home/pages/contactus/contactus.component';
import { HeadingcategoriesComponent } from './home/pages/headingcategories/headingcategories.component';
import { MainComponent } from './home/pages/headingcategories/main/main.component';
import { ExtraOptions } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { NavsidebarComponent } from './shared/layout/navsidebar/navsidebar.component';
import { TechnicalsuportComponent } from './shared/layout/technicalsuport/technicalsuport.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    CategoriesComponent,
    HomeComponent,
    ArticleComponent,
    CommentsComponent,
    SectionComponent,
    CommentFormComponent,
    AboutusComponent,
    ArticlesPageComponent,
    ContactusComponent,
    HeadingcategoriesComponent,
    MainComponent,
    NavbarComponent,
    NavsidebarComponent,
    TechnicalsuportComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
