"use strict";
var router_1 = require('@angular/router');
var articlesPage_routes_1 = require('./articlesPage/articlesPage.routes');
var customer_routes_1 = require('./+articlePage/customer.routes');
var home_routes_1 = require('./homePage/home.routes');
exports.App_Routes = articlesPage_routes_1.CustomersRoutes.concat(customer_routes_1.CustomerRoutes, home_routes_1.HomeRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.App_Routes)
];
//# sourceMappingURL=app.routes.js.map