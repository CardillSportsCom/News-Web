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
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._cardillBase = 'http://cardillsports.gear.host/';
        this._baseUrl = '';
    }
    DataService.prototype.postRating = function (id, rating) {
        return this.http.put(this._baseUrl + 'api/article/' + id + "/rating/" + rating, {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.postComment = function (id, comment) {
        return this.http.put(this._baseUrl + 'api/article/' + id + "/comment/" + comment, {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DataService.prototype.getAllArticles = function () {
        var _this = this;
        if (!this.allArticles) {
            return this.http.get(this._baseUrl + 'api/articles')
                .map(function (res) {
                _this.allArticles = res.json();
                return _this.allArticles;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.allArticles);
        }
    };
    DataService.prototype.getHomePageArticles = function (limit) {
        var _this = this;
        if (!this.homeArticles) {
            return this.http.get(this._baseUrl + 'api/articles/' + limit)
                .map(function (res) {
                _this.homeArticles = res.json();
                return _this.homeArticles;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.homeArticles);
        }
    };
    DataService.prototype.getCustomers = function () {
        var _this = this;
        if (!this.customers) {
            return this.http.get(this._baseUrl + 'customers.json')
                .map(function (res) {
                _this.customers = res.json();
                return _this.customers;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.customers);
        }
    };
    DataService.prototype.getArticle = function (id) {
        return this.http.get(this._baseUrl + 'api/article/' + id)
            .map(function (res) {
            var article = res.json();
            return article;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomer = function (id) {
        var _this = this;
        if (this.customers) {
            //filter using cached data
            return this.findCustomerObservable(id);
        }
        else {
            //Query the existing customers to find the target customer
            return Observable_1.Observable.create(function (observer) {
                _this.getCustomers().subscribe(function (customers) {
                    _this.customers = customers;
                    var cust = _this.filterCustomers(id);
                    observer.next(cust);
                    observer.complete();
                });
            })
                .catch(this.handleError);
        }
    };
    DataService.prototype.getOrders = function (id) {
        var _this = this;
        return this.http.get(this._baseUrl + 'orders.json')
            .map(function (res) {
            _this.orders = res.json();
            return _this.orders.filter(function (order) { return order.customerId === id; });
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateCustomer = function (customer) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.customers.forEach(function (cust, index) {
                if (cust.id === customer.id) {
                    var state = _this.filterStates(customer.state.abbreviation);
                    customer.state.abbreviation = state.abbreviation;
                    customer.state.name = state.name;
                    _this.customers[index] = customer;
                }
            });
            observer.next(true);
            observer.complete();
        });
    };
    DataService.prototype.getStates = function () {
        var _this = this;
        if (this.states) {
            return Observable_1.Observable.create(function (observer) {
                observer.next(_this.states);
                observer.complete();
            });
        }
        else {
            return this.http.get(this._baseUrl + 'states.json').map(function (response) {
                _this.states = response.json();
                return _this.states;
            })
                .catch(this.handleError);
        }
    };
    DataService.prototype.findCustomerObservable = function (id) {
        return this.createObservable(this.filterCustomers(id));
    };
    DataService.prototype.findArticleObservable = function (id) {
        return this.createObservable(this.filterArticles(id));
    };
    DataService.prototype.filterCustomers = function (id) {
        var custs = this.customers.filter(function (cust) { return cust.id === id; });
        return (custs.length) ? custs[0] : null;
    };
    DataService.prototype.filterArticles = function (id) {
        console.log("DFDFS");
        var items = this.article.filter(function (item) { return item.ID === id; });
        var res = (items.length) ? items[0] : null;
        console.log(items);
        return res;
    };
    DataService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    DataService.prototype.filterStates = function (stateAbbreviation) {
        var filteredStates = this.states.filter(function (state) { return state.abbreviation === stateAbbreviation; });
        return (filteredStates.length) ? filteredStates[0] : null;
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map