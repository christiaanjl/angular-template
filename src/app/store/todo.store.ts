import { Injectable } from '@angular/core';
import { TodoService } from "../service/todo.service";
import Status from "../constants/Status";
import Dictionary from "../models/Dictionary";
import Todo from "../models/Todo";
import { Store } from "./store";
import { keyBy, values } from "lodash";

interface StoreState {
    todos: Dictionary<Todo>,
    fetchStatus: Status
}

@Injectable({
    providedIn: 'root'
})
export class TodoStore extends Store<StoreState> {

    private static INITIAL_STATE: StoreState = {
        todos: {},
        fetchStatus: Status.INIT
    };

    constructor(public todoService: TodoService) {
        super(TodoStore.INITIAL_STATE);
    }

    get todos(): Todo[] {
        return values(this.store.todos);
    }

    set todos(todos: Todo[]) {
        this.mergeStore({todos: keyBy(todos, 'id')});
    }

    get fetchStatus(): Status {
        return this.store.fetchStatus;
    }

    set fetchStatus(fetchStatus: Status) {
        this.mergeStore({fetchStatus});
    }

    setCompleted(todoId: number, completed: boolean) {
        this.deepMerge({todos: {[todoId] : {completed}}});
    }

    fetchTodos(userId: number) {
        this.fetchStatus = Status.BUSY;
        this.todoService.getTodos(userId).subscribe((todos: Todo[]) => {
            this.todos = todos;
            this.fetchStatus = Status.SUCCESS;
        });
    }
}
