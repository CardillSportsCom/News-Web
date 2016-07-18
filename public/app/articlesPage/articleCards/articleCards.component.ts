import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import { IArticleData } from '../../shared/interfaces';
import { ArticleCardImageComponent } from './articleCardImage/articleCardImage.component';

@Component({ 
  moduleId: module.id,
  selector: 'article-cards', 
  templateUrl: 'articleCards.component.html',
  directives: [ ROUTER_DIRECTIVES, ArticleCardImageComponent ],
  pipes: [ CapitalizePipe, TrimPipe ],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ArticleCardsComponent implements OnInit {

  @Input() articles: IArticleData[] = [];
  
  constructor() {

  }
   
  
  ngOnInit() {
  
  }

}

