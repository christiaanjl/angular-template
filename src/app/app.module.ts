import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './views/users-page/todo/todo-list/todo-list.component';
import { UserCardComponent } from './views/users-page/user/user-card/user-card.component';
import { TodoCardComponent } from './views/users-page/todo/todo-card/todo-card.component';
import { UserListComponent } from "./views/users-page/user/user-list/user-list.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { UsersPageComponent } from './views/users-page/users-page.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './views/users-page/components/header/header.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ProgressSpinnerComponent } from './views/users-page/components/progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserCardComponent,
        TodoListComponent,
        TodoCardComponent,
        UsersPageComponent,
        HeaderComponent,
        ProgressSpinnerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
