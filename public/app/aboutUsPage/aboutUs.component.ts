import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SemanticModalComponent } from './modal.component';
import { DataService } from '../shared/services/data.service';
import { ArticleCardsComponent } from '../articlesPage/articleCards/articleCards.component';
import { FillPipe } from '../shared/pipes/fill.pipe';
import { ICreator } from '../shared/interfaces';

@Component({ 
  moduleId: module.id,
  selector: 'about-us', 
  templateUrl: 'aboutUs.component.html',
  directives: [ ROUTER_DIRECTIVES, SemanticModalComponent],
  pipes: [FillPipe]
})
export class AboutUsComponent implements OnInit {

  title: string;
  creators: ICreator[];
  arr:Array<number>;

  constructor(private dataService: DataService) {

   }
  
  ngOnInit() {
    this.dataService.getAllCreators()
      .subscribe((response: ICreator[]) => {
          this.creators = response;
      });
  }


}

