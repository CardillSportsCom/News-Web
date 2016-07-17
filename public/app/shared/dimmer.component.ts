
import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IArticleData } from './interfaces';

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES],
    selector: "sm-dimmer",
    template: `<div class="ui dimmer" #dimmer>
                    <div class="content">
                        <div class="center">
                            <div class="ui inverted button">Add Friend</div>
                        </div>
                    </div>

                </div>`
})
export class SemanticDimmerComponent {
    @ViewChild("dimmer") dimmer: ElementRef;
    @Input() article: IArticleData;

    show(options?: {}) {
        console.log("DIMMMER");
        console.log(this.article);

        jQuery(this.dimmer.nativeElement)
            .dimmer(options || {})
            .dimmer("toggle");
    }
}