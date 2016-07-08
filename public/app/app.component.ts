import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import {HomeComponent } from './homePage/home.component'
import {NavigationComponent } from './navigation/navigation.component'

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES, NavigationComponent],
  providers: [ APP_PROVIDERS ],
  precompile: [HomeComponent, NavigationComponent]
})
export class AppComponent {
  
  
}
