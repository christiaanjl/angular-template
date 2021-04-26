import { Injectable } from '@angular/core';
import { UserService } from "../service/user.service";
import User from "../models/User";
import { keyBy, values } from 'lodash';
import Status from "../constants/Status";
import Dictionary from "../models/Dictionary";
import { Store } from "./store";

interface StoreState {
    users: Dictionary<User>
    fetchStatus: Status
    selectedUser?: number
}

@Injectable({
    providedIn: 'root'
})
export class UserStore extends Store<StoreState> {

    private static INITIAL_STATE: StoreState = {
        users: {},
        fetchStatus: Status.INIT
    };

    constructor(private userService: UserService) {
        super(UserStore.INITIAL_STATE);
    }

    get users(): User[] {
        return values(this.store.users)
    }

    set users(users: User[]) {
        this.mergeStore({users: keyBy(users, 'id')});
    }

    get fetchStatus(): Status {
        return this.store.fetchStatus;
    }

    set fetchStatus(fetchStatus: Status) {
        this.mergeStore({fetchStatus});
    }

    get selectedUserId(): number {
        return this.store.selectedUser;
    }

    set selectedUserId(id: number) {
        this.mergeStore({selectedUser: id})
    }

    fetchUsers() {
        this.userService.getUsers().subscribe((users: User[]) => {
            this.users = users;
        });
    }
}
