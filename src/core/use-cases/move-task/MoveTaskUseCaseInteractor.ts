import { IMoveTaskInputBoundary } from "./IMoveTaskInputBoundary";
import { IMoveTaskOutputBoundary } from "./IMoveTaskOutputBoundary";
import { ITasksRepository } from "../../data-access/ITasksRepository";
import { TaskOutputDto } from "../../models/TaskOutputDto";

export class MoveTaskUseCaseInteractor implements IMoveTaskInputBoundary {
    constructor(
        private tasksRepository: ITasksRepository,
        private moveTaskOutputBoundary: IMoveTaskOutputBoundary) { }

    moveTask(taskId: number, direction: 'Up' | 'Down'): void {
        this.tasksRepository.moveTask(taskId, direction);
        let tasks = this.tasksRepository.getTasks();
        let results = tasks.map((task) => new TaskOutputDto(task.TaskId, task.Text, task.IsComplete, task.Order));
        this.moveTaskOutputBoundary.taskMoved(results);
    }
}