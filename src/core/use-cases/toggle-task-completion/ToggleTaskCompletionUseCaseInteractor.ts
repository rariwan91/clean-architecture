import { ITasksRepository } from "../../data-access/ITasksRepository";
import { IToggleTaskCompletionInputBoundary } from "./IToggleTaskCompletionInputBoundary";
import { IToggleTaskCompletionOutputBoundary } from "./IToggleTaskCompletionOutputBoundary";
import { TaskOutputDto } from "../../models/TaskOutputDto";

export class ToggleTaskCompletionUseCaseInteractor implements IToggleTaskCompletionInputBoundary {
    constructor(
        private tasksRepository: ITasksRepository,
        private toggleTaskCompletionOutputBoundary: IToggleTaskCompletionOutputBoundary) { }

    toggleTaskCompletion(taskId: number): void {
        this.tasksRepository.toggleTaskCompletion(taskId);
        let tasks = this.tasksRepository.getTasks();
        let results = tasks.map((task) => new TaskOutputDto(task.TaskId, task.Text, task.IsComplete, task.Order));
        this.toggleTaskCompletionOutputBoundary.taskCompletionToggled(results);
    }
}