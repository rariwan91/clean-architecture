import { Component, Input } from "@angular/core";

import { TaskDto } from "../view-models/TaskDto";
import { ToDoListService } from "./to-do-list.service";

@Component({
    selector: "to-do-list",
    templateUrl: "./to-do-list.component.html",
    providers: [ToDoListService],
    styleUrls: ["./to-do-list.component.scss"]
})
export class ToDoListComponent {
    @Input() newTaskValue: string = '';

    editTaskId: number | null = null;
    @Input() edittedTaskValue: string = '';

    tasks: TaskDto[] = [];

    constructor(private toDoListService: ToDoListService) { }

    ngOnInit(): void {
        this.getTasks();
    }

    addTask(): void {
        let self = this;

        this.toDoListService.addTaskAsync(this.newTaskValue)
            .subscribe(() => self.getTasks());
    }

    deleteTask(taskId: number): void {
        let self = this;

        this.toDoListService.deleteTaskAsync(taskId)
            .subscribe(() => self.getTasks());
    }

    setEdittedTask(taskId: number): void {
        this.editTaskId = taskId;
        this.edittedTaskValue = this.tasks.filter((task) => task.TaskId == taskId)[0].Text;
    }

    editTask(): void {
        let self = this;
        this.toDoListService.editTaskAsync(self.editTaskId!, self.edittedTaskValue)
            .subscribe(() => self.getTasks());
    }

    getTasks(): void {
        this.toDoListService.loadTasksAsync()
            .subscribe(tasks => this.tasks = tasks);
    }

    moveTask(taskId: number, direction: 'Up' | 'Down'): void {
        this.toDoListService.moveTaskAsync(taskId, direction)
            .subscribe(tasks => this.tasks = tasks);
    }

    toggleTaskCompletion(taskId: number): void {
        this.toDoListService.toggleTaskCompletionAsync(taskId)
            .subscribe(tasks => this.tasks = tasks);
    }
}