import { IAddTaskInputBoundary } from "../../use-cases/add-task/IAddTaskInputBoundary";
import { ILoadTasksInputBoundary } from "../../use-cases/load-tasks/ILoadTasksInputBoundary";

export class TasksController {
    constructor(
        private loadTasksInputBoundary: ILoadTasksInputBoundary,
        private addTaskInputBoundary: IAddTaskInputBoundary) {}

    loadTasks(): void {
        this.loadTasksInputBoundary.loadTasks();
    }

    addTask(newTask: string): void {
        this.addTaskInputBoundary.addTask(newTask);
    }
}