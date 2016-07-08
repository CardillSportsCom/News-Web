"use strict";
var http_1 = require('@angular/http');
var sorter_1 = require('./shared/utils/sorter');
var data_service_1 = require('./shared/services/data.service');
var trackby_service_1 = require('./shared/services/trackby.service');
exports.APP_PROVIDERS = [
    sorter_1.Sorter,
    data_service_1.DataService,
    trackby_service_1.TrackByService,
    http_1.HTTP_PROVIDERS,
];
//# sourceMappingURL=app.providers.js.map