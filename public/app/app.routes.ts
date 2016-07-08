import {RouterConfig, provideRouter} from '@angular/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CustomersRoutes } from './articlesPage/articlesPage.routes';
import { CustomerRoutes } from './+articlePage/customer.routes';
import { HomeRoutes } from './homePage/home.routes';

import { HomeComponent } from './homePage/home.component';
import { ArticlesPageComponent } from './articlesPage/articlesPage.component';
import { ArticleDetailsComponent } from './+articlePage/articleDetails.component'

export const App_Routes: RouterConfig = [
  //...CustomersRoutes,
  //...CustomerRoutes,
  //...HomeRoutes,
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesPageComponent } ,
  { path: 'articles/:id', component: ArticleDetailsComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(App_Routes),
  {provide: LocationStrategy, useClass: HashLocationStrategy}
];
