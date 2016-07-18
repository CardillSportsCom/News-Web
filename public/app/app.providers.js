"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var sorter_1 = require('./shared/utils/sorter');
var data_service_1 = require('./shared/services/data.service');
exports.APP_PROVIDERS = [
    sorter_1.Sorter,
    data_service_1.DataService,
    http_1.HTTP_PROVIDERS,
    core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy)
];
//# sourceMappingURL=app.providers.js.map