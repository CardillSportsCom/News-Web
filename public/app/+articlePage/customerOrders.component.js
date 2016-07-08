"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../shared/services/data.service');
var capitalize_pipe_1 = require('../shared/pipes/capitalize.pipe');
var CustomerOrdersComponent = (function () {
    function CustomerOrdersComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.filteredOrders = [];
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.dataService.getOrders(id).subscribe(function (orders) {
            _this.filteredOrders = orders;
        });
        this.dataService.getCustomer(id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerOrdersComponent.prototype.orderTrackBy = function (index, order) {
        return order.id;
    };
    CustomerOrdersComponent.prototype.orderItemTrackBy = function (index, orderItem) {
        return orderItem.id;
    };
    CustomerOrdersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-orders',
            templateUrl: 'customerOrders.component.html',
            pipes: [capitalize_pipe_1.CapitalizePipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService])
    ], CustomerOrdersComponent);
    return CustomerOrdersComponent;
}());
exports.CustomerOrdersComponent = CustomerOrdersComponent;
//# sourceMappingURL=customerOrders.component.js.map