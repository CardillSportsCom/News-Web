import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { DomSanitizationService } from '@angular/platform-browser'
import { ICustomer, IArticleData } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  moduleId: module.id,
  selector: 'article-details',
  templateUrl: 'articleDetails.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ CapitalizePipe ]
})
export class ArticleDetailsComponent implements OnInit {

  article: IArticleData;
  foo: string = "images/male.png";
  constructor(private router: Router, private sanitizer: DomSanitizationService, private route: ActivatedRoute, private dataService: DataService) { }

  public cleanImage() {
      this.sanitizer.bypassSecurityTrustStyle("images/" +this.article.ImageLink);
  }

  ngOnInit() {
      const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
      this.dataService.getArticle(id)
          .subscribe((article: IArticleData) => this.article = article);
  }
}