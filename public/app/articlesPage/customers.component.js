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
//import { Observable } from 'rxjs/Observable';
var data_service_1 = require('../shared/services/data.service');
var filterTextbox_component_1 = require('../filterTextbox/filterTextbox.component');
var customersCard_component_1 = require('./customersCard.component');
var CustomersComponent = (function () {
    function CustomersComponent(dataService) {
        this.dataService = dataService;
        this.customers = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
        this.articles = [];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.dataService.getCustomers()
            .subscribe(function (customers) {
            _this.customers = _this.filteredCustomers = customers;
        });
        this.dataService.getArticles()
            .subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    CustomersComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    CustomersComponent.prototype.filterChanged = function (data) {
        if (data && this.customers) {
            data = data.toUpperCase();
            var props_1 = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
            var filtered = this.customers.filter(function (item) {
                var match = false;
                for (var _i = 0, props_2 = props_1; _i < props_2.length; _i++) {
                    var prop = props_2[_i];
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            this.filteredCustomers = filtered;
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers',
            templateUrl: 'customers.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, filterTextbox_component_1.FilterTextboxComponent,
                customersCard_component_1.CustomersCardComponent]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));
//# sourceMappingURL=customers.component.js.map