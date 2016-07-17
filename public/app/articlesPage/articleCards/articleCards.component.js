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
var capitalize_pipe_1 = require('../../shared/pipes/capitalize.pipe');
var trim_pipe_1 = require('../../shared/pipes/trim.pipe');
var articleCardImage_component_1 = require('./articleCardImage/articleCardImage.component');
var ArticleCardsComponent = (function () {
    function ArticleCardsComponent() {
        this.articles = [];
    }
    ArticleCardsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ArticleCardsComponent.prototype, "articles", void 0);
    ArticleCardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-cards',
            templateUrl: 'articleCards.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, articleCardImage_component_1.ArticleCardImageComponent],
            pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe],
            //When using OnPush detectors, then the framework will check an OnPush 
            //component when any of its input properties changes, when it fires 
            //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleCardsComponent);
    return ArticleCardsComponent;
}());
exports.ArticleCardsComponent = ArticleCardsComponent;
//# sourceMappingURL=articleCards.component.js.map