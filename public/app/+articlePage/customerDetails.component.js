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
var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.dataService.getArticle(id)
            .subscribe(function (article) { return _this.article = article; });
    };
    CustomerDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-details',
            templateUrl: 'articleDetails.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [capitalize_pipe_1.CapitalizePipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());
exports.CustomerDetailsComponent = CustomerDetailsComponent;
//# sourceMappingURL=customerDetails.component.js.map