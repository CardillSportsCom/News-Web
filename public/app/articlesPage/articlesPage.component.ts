import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { ArticleCardsComponent } from './articleCards.component';
import { ICustomer, IOrder, IArticleData, IAllArticlesResponse } from '../shared/interfaces';

@Component({ 
  moduleId: module.id,
  selector: 'articlesPage', 
  templateUrl: 'articlesPage.component.html',
  directives: [ ROUTER_DIRECTIVES, FilterTextboxComponent, 
               ArticleCardsComponent ]
})
export class ArticlesPageComponent implements OnInit {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredArticles: IArticleData[] = [];
  articles: IArticleData[] = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';

    this.dataService.getAllArticles()
      .subscribe((articles: IArticleData[]) => {
        this.articles = articles;
        this.filteredArticles = articles;
      });
  }

  filterChanged(data: string) {
    //console.log(data);
    console.log(this.articles[0]);
    if (data && this.articles) {
        data = data.toUpperCase();
        let props = ['Name','Owner'];
        let filtered = this.articles.filter(item => {
            let match = false;
            for (let prop of props) {
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (prop == 'Name') {
                  if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                  }
                } else {  // 'Owner'
                  let ownerProps = ['firstName', 'lastName'];
                  for (let ownerProp of ownerProps) {
                    if (item[prop][ownerProp].toString().toUpperCase().indexOf(data) > -1) {
                      match = true;
                      break;
                    }
                  }
                  
                }

            };
            return match;
        });
        console.log(filtered.length + "LENGTH");
        this.filteredArticles = filtered;
    }
    else {
      this.filteredArticles = this.articles;
    }
  }

}
