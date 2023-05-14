import { IAddTaskInputBoundary } from "../../use-cases/add-task/IAddTaskInputBoundary";
import { IEditTaskInputBoundary } from "../../use-cases/edit-task/IEditTaskInputBoundary";
import { ILoadTasksInputBoundary } from "../../use-cases/load-tasks/ILoadTasksInputBoundary";

export class TasksController {
    constructor(
        private loadTasksInputBoundary: ILoadTasksInputBoundary,
        private addTaskInputBoundary: IAddTaskInputBoundary,
        private editTaskInputBoundary: IEditTaskInputBoundary) {}

    loadTasks(): void {
        this.loadTasksInputBoundary.loadTasks();
    }

    addTask(newTask: string): void {
        this.addTaskInputBoundary.addTask(newTask);
    }

    editTask(taskId: number, newTaskValue: string): void {
        this.editTaskInputBoundary.editTask(taskId, newTaskValue);
    }
}