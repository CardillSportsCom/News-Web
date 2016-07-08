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
var sortby_directive_1 = require('../shared/directives/sortby.directive');
var capitalize_pipe_1 = require('../shared/pipes/capitalize.pipe');
var trim_pipe_1 = require('../shared/pipes/trim.pipe');
var sorter_1 = require('../shared/utils/sorter');
var trackby_service_1 = require('../shared/services/trackby.service');
var CustomersGridComponent = (function () {
    function CustomersGridComponent(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.articles = [];
        this.customersn = [];
        this.foo = "RRRR";
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
        console.log(this.articles);
        console.log(this.customersn);
    };
    CustomersGridComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.articles.length);
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorter.sort(this.customersn, prop);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CustomersGridComponent.prototype, "articles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CustomersGridComponent.prototype, "customersn", void 0);
    CustomersGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers-grid',
            templateUrl: 'customersGrid.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, sortby_directive_1.SortByDirective],
            pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe],
            //When using OnPush detectors, then the framework will check an OnPush 
            //component when any of its input properties changes, when it fires 
            //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [sorter_1.Sorter, trackby_service_1.TrackByService])
    ], CustomersGridComponent);
    return CustomersGridComponent;
}());
exports.CustomersGridComponent = CustomersGridComponent;
//# sourceMappingURL=customersGrid.component.js.map