import { IDeleteTaskInputBoundary } from "./IDeleteTaskInputBoundary";
import { IDeleteTaskOutputBoundary } from "./IDeleteTaskOutputBoundary";
import { ITasksRepository } from "../../data-access/ITasksRepository";
import { TaskOutputDto } from "../../models/TaskOutputDto";

export class DeleteTaskUseCaseInteractor implements IDeleteTaskInputBoundary {
    constructor(
        private tasksRepository: ITasksRepository,
        private deleteTaskOutputBoundary: IDeleteTaskOutputBoundary) { }

    deleteTask(taskId: number): void {
        this.tasksRepository.deleteTask(taskId);
        let tasks = this.tasksRepository.getTasks();
        let results = tasks.map((task) => new TaskOutputDto(task.TaskId, task.Text, task.IsComplete, task.Order));
        this.deleteTaskOutputBoundary.taskDeleted(results);
    }
}