"use strict";
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var home_component_1 = require('./homePage/home.component');
var articlesPage_component_1 = require('./articlesPage/articlesPage.component');
var articleDetails_component_1 = require('./+articlePage/articleDetails.component');
var aboutUs_component_1 = require('./aboutUsPage/aboutUs.component');
exports.App_Routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'articles', component: articlesPage_component_1.ArticlesPageComponent },
    { path: 'article/:id', component: articleDetails_component_1.ArticleDetailsComponent },
    { path: 'about-us', component: aboutUs_component_1.AboutUsComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.App_Routes),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
];
//# sourceMappingURL=app.routes.js.map