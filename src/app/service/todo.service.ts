import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Todo from "../models/Todo";
import { shareReplay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private static readonly URL = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {
    }

    getTodos(userId: number): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${TodoService.URL}/users/${userId}/todos`).pipe(shareReplay());
    }
}
