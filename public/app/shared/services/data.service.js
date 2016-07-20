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
        return this.http.put(this._baseUrl + 'api/content/' + id + "/rating/" + rating, {})
            .map(function (res) {
            var body = res.json();
            return body.data || {};
        })
            .catch(this.handleError);
    };
    DataService.prototype.postComment = function (id, comment) {
        var _this = this;
        return this.http.put(this._baseUrl + 'api/content/' + id + "/comment/" + comment, {})
            .map(function (res) {
            _this.lastPostedComment = res.json();
            return _this.lastPostedComment;
        })
            .catch(this.handleError);
    };
    // Gets all articles and podcasts
    DataService.prototype.getAllArticles = function () {
        var _this = this;
        if (!this.allArticles) {
            return this.http.get(this._baseUrl + 'api/content')
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
    // Gets articles only
    DataService.prototype.getArticles = function () {
        var _this = this;
        if (!this.articles) {
            return this.http.get(this._baseUrl + 'api/articles')
                .map(function (res) {
                _this.articles = res.json();
                return _this.articles;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.articles);
        }
    };
    // Gets podcasts only
    DataService.prototype.getPodcasts = function () {
        var _this = this;
        if (!this.podcasts) {
            return this.http.get(this._baseUrl + 'api/podcasts')
                .map(function (res) {
                _this.podcasts = res.json();
                return _this.podcasts;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.podcasts);
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
        console.log("VITH");
        if (!this.homeArticles) {
            return this.http.get(this._baseUrl + 'api/home-content/' + limit)
                .map(function (res) {
                console.log("VITH2");
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
        return this.http.get(this._baseUrl + 'api/content/' + id)
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