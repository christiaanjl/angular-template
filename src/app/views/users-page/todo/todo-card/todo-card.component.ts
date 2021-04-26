import { Component, Input, OnInit } from '@angular/core';
import Todo from "../../../../models/Todo";
import { TodoStore } from "../../../../store/todo.store";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

    @Input()
    todo: Todo;

    constructor(public todoStore: TodoStore) {
    }

    ngOnInit(): void {
    }

    check(isChecked: boolean) {
        this.todoStore.setCompleted(this.todo.id, isChecked)
    }
}
