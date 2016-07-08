import { RouterConfig } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { ArticleDetailsComponent } from './articleDetails.component';


export const CustomerRoutes: RouterConfig = [
  { 
    path: 'articles/:id', 
    component: CustomerComponent,
    children: [      
      { path:'details', component: ArticleDetailsComponent }      
    ]
  }
];

