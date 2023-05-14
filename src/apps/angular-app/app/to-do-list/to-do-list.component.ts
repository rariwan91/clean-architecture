import { Component } from "@angular/core";
import { TaskDto } from "../view-models/TaskDto";
import { ToDoListService } from "./to-do-list.service";

@Component({
    selector: "to-do-list",
    templateUrl: "./to-do-list.component.html",
    providers: [ToDoListService],
    styleUrls: ["./to-do-list.component.scss"]
})
export class ToDoListComponent {
    tasks: TaskDto[] = [];

    constructor(private toDoListService: ToDoListService){}

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.toDoListService.loadTasksAsync()
            .subscribe(tasks => this.tasks = tasks);
    }
}