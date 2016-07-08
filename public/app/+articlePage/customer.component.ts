import { Component, OnInit } from '@angular/core';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';

@Component({ 
  moduleId: module.id,
  selector: 'orders',
  templateUrl: 'customer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CustomerComponent implements OnInit {
  
  
    constructor(private router: Router) { }

    ngOnInit() {
    }

}
