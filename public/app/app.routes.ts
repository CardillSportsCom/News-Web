import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersRoutes } from './articlesPage/articlesPage.routes';
import { CustomerRoutes } from './+articlePage/customer.routes';
import { HomeRoutes } from './homePage/home.routes';

export const App_Routes: RouterConfig = [
  ...CustomersRoutes,
  ...CustomerRoutes,
  ...HomeRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(App_Routes)
];
