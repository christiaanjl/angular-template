import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import User from "../models/User";
import { shareReplay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private static readonly URL = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(UserService.URL + '/users').pipe(shareReplay());
    }
}
