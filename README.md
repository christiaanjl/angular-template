# Angular demo

Demo showing use of RxJS based Observable Data Services to maintain application state. Of particular interest are the [stores](./src/app/store).

## UI
Initial project fetches users and their to-do items from [jsonplaceholder](https://jsonplaceholder.typicode.com)

![screenshot](screenshot.png)


## Project structure
```
src/
├── app
│   ├── constants
│   │   └── Status.ts
│   ├── models
│   │   ├── Dictionary.ts
│   │   ├── Todo.ts
│   │   └── User.ts
│   ├── service
│   │   ├── todo.service.ts
│   │   └── user.service.ts
│   ├── store
│   │   ├── store.ts
│   │   ├── todo.store.ts
│   │   └── user.store.ts
│   ├── views
│   │   └── users-page
│   │       ├── components
│   │       │   ├── header
│   │       │   │   ├── header.component.scss
│   │       │   │   └── header.component.ts
│   │       │   └── progress-spinner
│   │       │       ├── progress-spinner.component.scss
│   │       │       └── progress-spinner.component.ts
│   │       ├── todo
│   │       │   ├── todo-card
│   │       │   │   ├── todo-card.component.html
│   │       │   │   ├── todo-card.component.scss
│   │       │   │   ├── todo-card.component.spec.ts
│   │       │   │   └── todo-card.component.ts
│   │       │   └── todo-list
│   │       │       ├── todo-list.component.html
│   │       │       ├── todo-list.component.scss
│   │       │       ├── todo-list.component.spec.ts
│   │       │       └── todo-list.component.ts
│   │       ├── user
│   │       │   ├── user-card
│   │       │   │   ├── user-card.component.html
│   │       │   │   ├── user-card.component.scss
│   │       │   │   ├── user-card.component.spec.ts
│   │       │   │   └── user-card.component.ts
│   │       │   └── user-list
│   │       │       ├── user-list.component.html
│   │       │       ├── user-list.component.scss
│   │       │       ├── user-list.component.spec.ts
│   │       │       └── user-list.component.ts
│   │       ├── users-page.component.html
│   │       ├── users-page.component.scss
│   │       ├── users-page.component.spec.ts
│   │       └── users-page.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts
```

package.json inclusions:
* @angular/material
* lodash
* ...

### `ng serve`

Runs the app in the development mode.<br />
Open [http://localhost:4200](http://localhost:4200/) to view it in the browser.
