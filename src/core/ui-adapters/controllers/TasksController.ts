import { IAddTaskInputBoundary } from "../../use-cases/add-task/IAddTaskInputBoundary";
import { IDeleteTaskInputBoundary } from "../../use-cases/delete-task/IDeleteTaskInputBoundary";
import { IEditTaskInputBoundary } from "../../use-cases/edit-task/IEditTaskInputBoundary";
import { ILoadTasksInputBoundary } from "../../use-cases/load-tasks/ILoadTasksInputBoundary";
import { IMoveTaskInputBoundary } from "../../use-cases/move-task/IMoveTaskInputBoundary";

export class TasksController {
    constructor(
        private loadTasksInputBoundary: ILoadTasksInputBoundary,
        private addTaskInputBoundary: IAddTaskInputBoundary,
        private editTaskInputBoundary: IEditTaskInputBoundary,
        private deleteTaskInputBoundary: IDeleteTaskInputBoundary,
        private moveTaskInputBoundary: IMoveTaskInputBoundary) { }

    loadTasks(): void {
        this.loadTasksInputBoundary.loadTasks();
    }

    addTask(newTask: string): void {
        this.addTaskInputBoundary.addTask(newTask);
    }

    editTask(taskId: number, newTaskValue: string): void {
        this.editTaskInputBoundary.editTask(taskId, newTaskValue);
    }

    deleteTask(taskId: number): void {
        this.deleteTaskInputBoundary.deleteTask(taskId);
    }

    moveTask(taskId: number, direction: 'Up' | 'Down'): void {
        this.moveTaskInputBoundary.moveTask(taskId, direction);
    }
}