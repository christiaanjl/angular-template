import { BehaviorSubject, Observable } from "rxjs";
import { merge } from 'lodash';

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export class Store<T> {
    public readonly store$: Observable<T>;
    private readonly _store: BehaviorSubject<T>;

    constructor(initialState: T) {
        this._store = new BehaviorSubject<T>(initialState);
        this.store$ = this._store.asObservable();
    }

    protected get store(): T {
        return this._store.getValue();
    }

    protected set store(state: T) {
        this._store.next(state);
    }

    mergeStore(state: Partial<T>) {
        this.store = {
            ...this.store,
            ...state
        }
    }

    deepMerge(state: RecursivePartial<T>) {
        this.store = merge({}, this.store, state);
    }
}
