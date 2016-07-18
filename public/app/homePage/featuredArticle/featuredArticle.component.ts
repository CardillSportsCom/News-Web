import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SafeStyle} from '@angular/platform-browser';

import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import { IArticleData } from '../../shared/interfaces';

@Component({ 
  moduleId: module.id,
  selector: 'featured-article', 
  templateUrl: 'featuredArticle.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ CapitalizePipe, TrimPipe ],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class FeaturedArticleComponent implements OnInit, OnChanges {

  @Input() article: IArticleData;

  @Input() bannerImage: SafeStyle;
  
  constructor() {
    
   }
  
  ngOnInit() {
    
  }

  ngOnChanges() {
    
  }

}

