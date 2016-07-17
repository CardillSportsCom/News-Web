import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import { HomeComponent } from './homePage/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
    <footer></footer>
  `,
  directives: [ ROUTER_DIRECTIVES, NavigationComponent, FooterComponent],
  providers: [ APP_PROVIDERS ],
  precompile: [HomeComponent, NavigationComponent]
})
export class AppComponent {
  
  
}
