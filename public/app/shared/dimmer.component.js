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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var SemanticDimmerComponent = (function () {
    function SemanticDimmerComponent() {
    }
    SemanticDimmerComponent.prototype.show = function (options) {
        console.log("DIMMMER");
        console.log(this.article);
        jQuery(this.dimmer.nativeElement)
            .dimmer(options || {})
            .dimmer("toggle");
    };
    __decorate([
        core_1.ViewChild("dimmer"), 
        __metadata('design:type', core_1.ElementRef)
    ], SemanticDimmerComponent.prototype, "dimmer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SemanticDimmerComponent.prototype, "article", void 0);
    SemanticDimmerComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            directives: [router_1.ROUTER_DIRECTIVES],
            selector: "sm-dimmer",
            template: "<div class=\"ui dimmer\" #dimmer>\n                    <div class=\"content\">\n                        <div class=\"center\">\n                            <div class=\"ui inverted button\">Add Friend</div>\n                        </div>\n                    </div>\n\n                </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticDimmerComponent);
    return SemanticDimmerComponent;
}());
exports.SemanticDimmerComponent = SemanticDimmerComponent;
//# sourceMappingURL=dimmer.component.js.map