import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { SafeStyle, DomSanitizationService } from '@angular/platform-browser'
import { ICustomer, IArticleData } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { SemanticRatingComponent } from './ratings.component';

@Component({
  moduleId: module.id,
  selector: 'article-details',
  templateUrl: 'articleDetails.component.html',
  directives: [ ROUTER_DIRECTIVES, SemanticRatingComponent ],
  pipes: [ CapitalizePipe ]
})
export class ArticleDetailsComponent implements OnInit {

  sub: any;
  article: IArticleData;
  foo: string = "images/male.png";
  articleImage: SafeStyle;
  red: string = "red";
  constructor(private router: Router, private sanitizer: DomSanitizationService, private route: ActivatedRoute, private dataService: DataService) { }

  
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        let id = +params['id']; // (+) converts string 'id' to a number
        //TODO: chain observables
        this.dataService.getArticle(id).subscribe((article: IArticleData) => {
          this.article = article;
          this.articleImage = this.sanitizer.bypassSecurityTrustStyle("url('/images/overlay.png'), url('/images/" + this.article.ImageLink);
        });
      });
      
  }
}