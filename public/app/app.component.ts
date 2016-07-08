import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import {HomeComponent } from './homePage/home.component'
@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ APP_PROVIDERS ],
  precompile: [HomeComponent]
})
export class AppComponent {
  
  
}
