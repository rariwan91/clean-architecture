import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDto } from '../view-models/TaskDto';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ToDoListService {
    constructor(private http: HttpClient) { }

    addTaskAsync(newTaskValue: string): Observable<TaskDto[]> {
        return this.http.post<TaskDto[]>('http://localhost:3000/tasks/addTask', {
            newTaskValue: newTaskValue
        }).pipe(catchError((err) => []));
    }

    deleteTaskAsync(taskId: number): Observable<TaskDto[]> {
        return this.http.post<TaskDto[]>('http://localhost:3000/tasks/deleteTask', {
            taskId: taskId
        }).pipe(catchError((err) => []));
    }

    editTaskAsync(taskId: number, newTaskValue: string): Observable<TaskDto[]> {
        return this.http.post<TaskDto[]>('http://localhost:3000/tasks/editTask', {
            taskId: taskId,
            newTaskValue: newTaskValue
        }).pipe(catchError((err) => []));
    }

    loadTasksAsync(): Observable<TaskDto[]> {
        return this.http.get<TaskDto[]>('http://localhost:3000/tasks/loadTasks')
            .pipe(catchError((err) => []));
    }

    moveTaskAsync(taskId: number, direction: 'Up' | 'Down'): Observable<TaskDto[]> {
        return this.http.post<TaskDto[]>('http://localhost:3000/tasks/moveTask', {
            taskId: taskId,
            direction: direction
        }).pipe(catchError((err) => []));
    }

    toggleTaskCompletionAsync(taskId: number): Observable<TaskDto[]> {
        return this.http.post<TaskDto[]>('http://localhost:3000/tasks/toggleTaskCompletion', {
            taskId: taskId
        }).pipe(catchError((err) => []));
    }
}