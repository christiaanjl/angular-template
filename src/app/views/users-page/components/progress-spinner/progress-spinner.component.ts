import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-spinner',
    template: `
        <div class="progress-spinner">
            <mat-spinner></mat-spinner>
        </div>
    `,
    styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
