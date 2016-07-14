import {RouterConfig, provideRouter} from '@angular/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HomeComponent } from './homePage/home.component';
import { ArticlesPageComponent } from './articlesPage/articlesPage.component';
import { ArticleDetailsComponent } from './+articlePage/articleDetails.component'

export const App_Routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesPageComponent } ,
  { path: 'articles/:id', component: ArticleDetailsComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(App_Routes),
  {provide: LocationStrategy, useClass: HashLocationStrategy}
];
