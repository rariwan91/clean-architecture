import { ILoadTasksInputBoundary } from "./ILoadTasksInputBoundary";
import { ILoadTasksOutputBoundary } from "./ILoadTasksOutputBoundary";
import { ITasksRepository } from "../data-access/ITasksRepository";
import { TaskOutputDto } from "../models/TaskOutputDto";

export class LoadTasksUseCaseInteractor implements ILoadTasksInputBoundary {
    constructor(
        private tasksRepository: ITasksRepository,
        private loadTasksOutputBoundary: ILoadTasksOutputBoundary) { }

    loadTasks(): void {
        let tasks = this.tasksRepository.getTasks();
        let results = tasks.map((task) => new TaskOutputDto(task.TaskId, task.Text, task.IsComplete, task.Order));
        this.loadTasksOutputBoundary.showTasks(results);
    }
}