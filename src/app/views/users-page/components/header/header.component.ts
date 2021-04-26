import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div class="header">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
