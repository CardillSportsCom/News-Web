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
var platform_browser_1 = require('@angular/platform-browser');
var data_service_1 = require('../shared/services/data.service');
var capitalize_pipe_1 = require('../shared/pipes/capitalize.pipe');
var ratings_component_1 = require('./ratings.component');
var ArticleDetailsComponent = (function () {
    function ArticleDetailsComponent(router, sanitizer, route, dataService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.dataService = dataService;
        this.foo = "images/male.png";
        this.red = "red";
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            //TODO: chain observables
            _this.dataService.getArticle(id).subscribe(function (article) {
                _this.article = article;
                _this.articleImage = _this.sanitizer.bypassSecurityTrustStyle("url('/images/overlay.png'), url('/images/" + _this.article.ImageLink);
            });
        });
    };
    ArticleDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-details',
            templateUrl: 'articleDetails.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, ratings_component_1.SemanticRatingComponent],
            pipes: [capitalize_pipe_1.CapitalizePipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, platform_browser_1.DomSanitizationService, router_1.ActivatedRoute, data_service_1.DataService])
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());
exports.ArticleDetailsComponent = ArticleDetailsComponent;
//# sourceMappingURL=articleDetails.component.js.map