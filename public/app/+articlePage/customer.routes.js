"use strict";
var customer_component_1 = require('./customer.component');
var articleDetails_component_1 = require('./articleDetails.component');
exports.CustomerRoutes = [
    {
        path: 'articles/:id',
        component: customer_component_1.CustomerComponent,
        children: [
            { path: 'details', component: articleDetails_component_1.ArticleDetailsComponent }
        ]
    }
];
//# sourceMappingURL=customer.routes.js.map