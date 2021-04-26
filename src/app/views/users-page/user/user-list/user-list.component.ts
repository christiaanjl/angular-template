import { Component, OnInit } from '@angular/core';
import { UserStore } from "../../../../store/user.store";
import { TodoStore } from "../../../../store/todo.store";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    constructor(public userStore: UserStore,
                public todoStore: TodoStore) {
    }

    ngOnInit(): void {
        this.userStore.fetchUsers();
    }

    selectUser(userId: number) {
        this.userStore.selectedUserId = userId;
        this.todoStore.fetchTodos(userId);
    }
}
