import { Component, Input, OnInit } from '@angular/core';
import User from "../../../../models/User";
import { UserStore } from "../../../../store/user.store";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    @Input()
    user: User;

    constructor(public userStore: UserStore) {
    }

    ngOnInit(): void {
    }

    isSelected() {
        return this.userStore.selectedUserId === this.user.id
    }
}
