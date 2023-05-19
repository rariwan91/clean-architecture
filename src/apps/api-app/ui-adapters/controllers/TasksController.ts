import { ILoadTasksInputBoundary } from "../../../../core/use-cases/load-tasks/ILoadTasksInputBoundary";

export class TasksController {
    constructor(private loadTasksInputBoundary: ILoadTasksInputBoundary){}

    getTasks(): void {
        return this.loadTasksInputBoundary.loadTasks();
    }
}
