import { ArticlesPageComponent } from './home/pages/articles-page/articles-page.component';
import { HeadingcategoriesComponent } from './home/pages/headingcategories/headingcategories.component';
import { HomeComponent } from './home/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'headingarticle', component: HeadingcategoriesComponent },
  {
    path: 'headingarticle/article',
    component: ArticlesPageComponent,
  },

  { path: '**', component: HomeComponent },
  {
    path: '',
    redirectTo: 'content', // Empty path will redirect to content route.
    pathMatch: 'full',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
