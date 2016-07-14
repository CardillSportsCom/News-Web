import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IComment, IArticleData } from '../interfaces';

@Injectable()
export class DataService {
    _cardillBase: string = 'http://cardillsports.gear.host/';
    _baseUrl: string = '';    
    allArticles: IArticleData[];
    homeArticles: IArticleData[];
    lastPostedComment: IComment;

    constructor(private http: Http) { }
    
    postRating(id: string, rating: number) : Observable<Response> {
        return this.http.put(this._baseUrl + 'api/article/' + id + "/rating/" + rating, {})
                    .map((res: Response) => {
                        let body = res.json();
                        return body.data || { };
                    })
                    .catch(this.handleError);        
    }

    postComment(id: string, comment: string) : Observable<IComment> {
        return this.http.put(this._baseUrl + 'api/article/' + id + "/comment/" + comment, {})
                    .map((res: Response) => {
                        this.lastPostedComment = res.json();
                        return this.lastPostedComment;
                    })
                    .catch(this.handleError);        
    }

    getAllArticles() : Observable<IArticleData[]> {
        if (!this.allArticles) {
            return this.http.get(this._baseUrl + 'api/articles')
                        .map((res: Response) => {
                            this.allArticles = res.json();                        
                            return this.allArticles;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.allArticles);
        }
    }

    getHomePageArticles(limit: number) : Observable<IArticleData[]> {
        if (!this.homeArticles) {
            return this.http.get(this._baseUrl + 'api/articles/' + limit)
                        .map((res: Response) => {
                            this.homeArticles = res.json();                        
                            return this.homeArticles;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.homeArticles);
        }
    }


    getArticle(id: string) : Observable<IArticleData> {
        return this.http.get(this._baseUrl + 'api/article/' + id)
                        .map((res: Response) => {
                            const article : IArticleData = res.json();                        
                            return article;
                        })
                        .catch(this.handleError);
    }

    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
