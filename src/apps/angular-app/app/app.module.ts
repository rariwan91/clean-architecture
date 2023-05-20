import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: ToDoListComponent },
        ])
    ],
    declarations: [
        AppComponent,
        ToDoListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
