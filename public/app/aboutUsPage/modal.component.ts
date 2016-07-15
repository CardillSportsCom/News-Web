
import { Component, Input, ViewChild, ChangeDetectionStrategy, AfterViewInit, ElementRef, EventEmitter, Output } from "@angular/core";

declare var jQuery: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-modal",
    template: `<div class="ui modal {{class}}" #modal>
    <i class="close icon"></i>
    <div [ngClass]="{'icon': icon}" class="ui header">
        <i *ngIf="icon" class="icon {{icon}}"></i>
        {{title}}
    </div>
    <div class="content">
        <ng-content select="modal-content"></ng-content>
    </div>
    <div class="actions">
        <ng-content select="modal-actions"></ng-content>
    </div>
</div>`
})
export class SemanticModalComponent {
    @Input() class: string;
    @Input() title: string;
    @Input() icon: string;
    @ViewChild("modal") modal: ElementRef;

    show(data?: {}) {
        jQuery(this.modal.nativeElement)
            .modal(data || {})
            .modal("toggle");
    }
}