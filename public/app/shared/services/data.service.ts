import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState, 
    IAllArticlesResponse, IArticleData, ISingleArticlesResponse } from '../interfaces';

@Injectable()
export class DataService {
    _cardillBase: string = 'http://cardillsports.gear.host/';
    _baseUrl: string = '';
    customers: ICustomer[];
    orders: IOrder[];
    states: IState[];
    allArticles: IArticleData[];
    homeArticles: IArticleData[];

    constructor(private http: Http) { }
    
    postRating(id: number, rating: number) : Observable<Response> {
        return this.http.put(this._baseUrl + 'api/article/' + id + "/" + rating, {})
                    .map(this.extractData)
                    .catch(this.handleError);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
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

    getCustomers() : Observable<ICustomer[]> {
        if (!this.customers) {
            return this.http.get(this._baseUrl + 'customers.json')
                        .map((res: Response) => {
                            this.customers = res.json();
                            return this.customers;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.customers);
        }
    }

    getArticle(id: number) : Observable<IArticleData> {
        return this.http.get(this._baseUrl + 'api/article/' + id)
                        .map((res: Response) => {
                            const article : IArticleData = res.json();                        
                            return article;
                        })
                        .catch(this.handleError);
    }

    getCustomer(id: number) : Observable<ICustomer> {
        if (this.customers) {
            //filter using cached data
            return this.findCustomerObservable(id);
        } else {
            //Query the existing customers to find the target customer
            return Observable.create((observer: Observer<ICustomer>) => {
                    this.getCustomers().subscribe((customers: ICustomer[]) => {
                        this.customers = customers;                
                        const cust = this.filterCustomers(id);
                        observer.next(cust);
                        observer.complete();
                })
            })
            .catch(this.handleError);
        }
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get(this._baseUrl + 'orders.json')
                .map((res: Response) => {
                    this.orders = res.json();
                    return this.orders.filter((order: IOrder) => order.customerId === id);
                })
                .catch(this.handleError);               
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            this.customers.forEach((cust: ICustomer, index: number) => {
               if (cust.id === customer.id) {
                   const state = this.filterStates(customer.state.abbreviation);
                   customer.state.abbreviation = state.abbreviation;
                   customer.state.name = state.name;
                   this.customers[index] = customer;
               } 
            });
            observer.next(true);
            observer.complete();
        });
    }
    
    getStates(): Observable<IState[]> {
        if (this.states) {
            return Observable.create((observer: Observer<IState[]>) => {
                observer.next(this.states);
                observer.complete();
            });
        } else {
            return this.http.get(this._baseUrl + 'states.json').map((response: Response) => {
                this.states = response.json();
                return this.states;
            })
            .catch(this.handleError);
        }
    }
    
    private findCustomerObservable(id: number) : Observable<ICustomer> {        
        return this.createObservable(this.filterCustomers(id));
    }

    private findArticleObservable(id: number) : Observable<IArticleData> {        
        return this.createObservable(this.filterArticles(id));
    }
    
    private filterCustomers(id: number) : ICustomer {
        const custs = this.customers.filter((cust) => cust.id === id);
        return (custs.length) ? custs[0] : null;
    }

    private filterArticles(id: number) : IArticleData {
        console.log("DFDFS");
        const items = this.article.filter((item) => item.ID === id);
        const res =  (items.length) ? items[0] : null;
        console.log(items);
        return res;
    }
    
    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
    private filterStates(stateAbbreviation: string) {
        const filteredStates = this.states.filter((state) => state.abbreviation === stateAbbreviation);
        return (filteredStates.length) ? filteredStates[0] : null;
    }
    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
