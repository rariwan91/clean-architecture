import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDto } from '../view-models/TaskDto';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ToDoListService {
    constructor(private http: HttpClient){}

    loadTasksAsync(): Observable<TaskDto[]> {
        return this.http.get<TaskDto[]>('http://localhost:3000/loadTasks')
        .pipe(catchError((err) => []));
    }
}