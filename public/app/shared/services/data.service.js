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
            .map(function (res) {
            var body = res.json();
            return body.data || {};
        })
            .catch(this.handleError);
    };
    DataService.prototype.postComment = function (id, comment) {
        var _this = this;
        return this.http.put(this._baseUrl + 'api/article/' + id + "/comment/" + comment, {})
            .map(function (res) {
            _this.lastPostedComment = res.json();
            return _this.lastPostedComment;
        })
            .catch(this.handleError);
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
    DataService.prototype.getAllCreators = function () {
        var _this = this;
        if (!this.allCreators) {
            return this.http.get(this._baseUrl + 'api/creators')
                .map(function (res) {
                _this.allCreators = res.json();
                return _this.allCreators;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.allCreators);
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
    DataService.prototype.getArticle = function (id) {
        return this.http.get(this._baseUrl + 'api/article/' + id)
            .map(function (res) {
            var article = res.json();
            return article;
        })
            .catch(this.handleError);
    };
    DataService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
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