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
var featuredArticle_component_1 = require('./featuredArticle/featuredArticle.component');
var data_service_1 = require('../shared/services/data.service');
var articleCards_component_1 = require('../articlesPage/articleCards.component');
var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.articles = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Customers';
        this.dataService.getArticles()
            .subscribe(function (articles) {
            _this.featuredArticle = articles[0];
            _this.articles = articles.slice(1);
            console.log(_this.featuredArticle.Name);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                featuredArticle_component_1.FeaturedArticleComponent,
                articleCards_component_1.ArticleCardsComponent
            ]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map