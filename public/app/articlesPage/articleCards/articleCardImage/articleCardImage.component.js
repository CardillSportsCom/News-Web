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
var dimmer_component_1 = require('../../../shared/dimmer.component');
var truncate_pipe_1 = require('../../../shared/pipes/truncate.pipe');
var ArticleCardImageComponent = (function () {
    function ArticleCardImageComponent() {
    }
    ArticleCardImageComponent.prototype.ngAfterViewInit = function () {
        jQuery(this.image.nativeElement)
            .dimmer({
            on: 'hover'
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ArticleCardImageComponent.prototype, "article", void 0);
    __decorate([
        core_1.ViewChild("image"), 
        __metadata('design:type', core_1.ElementRef)
    ], ArticleCardImageComponent.prototype, "image", void 0);
    ArticleCardImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-card-image',
            templateUrl: 'articleCardImage.component.html',
            pipes: [truncate_pipe_1.TruncatePipe],
            directives: [router_1.ROUTER_DIRECTIVES, dimmer_component_1.SemanticDimmerComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleCardImageComponent);
    return ArticleCardImageComponent;
}());
exports.ArticleCardImageComponent = ArticleCardImageComponent;
//# sourceMappingURL=articleCardImage.component.js.map