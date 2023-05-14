import { IEditTaskInputBoundary } from "./IEditTaskInputBoundary";
import { IEditTaskOutputBoundary } from "./IEditTaskOutputBoundary";
import { ITasksRepository } from "../data-access/ITasksRepository";
import { Task } from "../../entities/Task";
import { TaskOutputDto } from "../models/TaskOutputDto";

export class EditTaskUseCaseInteractor implements IEditTaskInputBoundary {
    constructor(
        private tasksRepository: ITasksRepository,
        private editTaskOutputBoundary: IEditTaskOutputBoundary) { }

    editTask(taskId: number, newTaskValue: string): void {
        this.tasksRepository.editTask(taskId, newTaskValue);
        let tasks = this.tasksRepository.getTasks();
        let results = tasks.map((task) => new TaskOutputDto(task.TaskId, task.Text, task.IsComplete, task.Order));
        this.editTaskOutputBoundary.showTasks(results);
    }
}