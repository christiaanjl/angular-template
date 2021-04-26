import { Component, OnInit } from '@angular/core';
import { TodoStore } from "../../../../store/todo.store";
import Status from "../../../../constants/Status";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    status = Status;

    constructor(public todoStore: TodoStore) {
    }

    ngOnInit(): void {
    }

}
