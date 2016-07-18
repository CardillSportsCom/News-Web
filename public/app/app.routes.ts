import {RouterConfig, provideRouter} from '@angular/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HomeComponent } from './homePage/home.component';
import { ArticlesPageComponent } from './articlesPage/articlesPage.component';
import { ArticleDetailsComponent } from './+articlePage/articleDetails.component';
import { AboutUsComponent } from './aboutUsPage/aboutUs.component';

export const App_Routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesPageComponent } ,
  { path: 'article/:id', component: ArticleDetailsComponent},
  { path: 'about-us', component: AboutUsComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(App_Routes),
  {provide: LocationStrategy, useClass: HashLocationStrategy}
];
