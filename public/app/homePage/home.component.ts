import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { FeaturedArticleComponent } from './featuredArticle/featuredArticle.component';
import { DataService } from '../shared/services/data.service';
import { ArticleCardsComponent } from '../articlesPage/articleCards.component';

import { ICustomer, IOrder, IArticleData, IAllArticlesResponse } from '../shared/interfaces';

@Component({ 
  moduleId: module.id,
  selector: 'home', 
  templateUrl: 'home.component.html',
  directives: [ ROUTER_DIRECTIVES, 
              FeaturedArticleComponent,
               ArticleCardsComponent
                ]
})
export class HomeComponent implements OnInit {

  title: string;
  featuredArticle: IArticleData;
  articles: IArticleData[] = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';

    this.dataService.getArticles()
      .subscribe((articles: IArticleData[]) => {
        this.featuredArticle = articles[0];
        this.articles = articles.slice(1);
        console.log(this.featuredArticle.Name);
      });
  }


}

