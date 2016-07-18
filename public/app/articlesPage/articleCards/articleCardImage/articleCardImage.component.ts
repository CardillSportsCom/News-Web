import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SemanticDimmerComponent } from '../../../shared/dimmer.component';
import { IArticleData } from '../../../shared/interfaces';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'article-card-image',
  templateUrl: 'articleCardImage.component.html',
  pipes : [TruncatePipe],
  directives: [ ROUTER_DIRECTIVES, SemanticDimmerComponent ],
})
export class ArticleCardImageComponent implements AfterViewInit {

    @Input() article: IArticleData;
    @ViewChild("image") image: ElementRef;
  
    constructor() { }

    ngAfterViewInit() {
         jQuery(this.image.nativeElement)
            .dimmer({
                on: 'hover'
            });
    }
  
}