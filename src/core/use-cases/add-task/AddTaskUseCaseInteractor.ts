import { IAddTaskInputBoundary } from "./IAddTaskInputBoundary";
import { IAddTaskOutputBoundary } from "./IAddTaskOutputBoundary";
import { ITasksRepository } from "../data-access/ITasksRepository";
import { Task } from "../../entities/Task";
import { TaskOutputDto } from "../models/TaskOutputDto";

export class AddTaskUseCaseInteractor implements IAddTaskInputBoundary {
    constructor(
        private tasksRepository: ITasksRepository,
        private addTaskOutputBoundary: IAddTaskOutputBoundary) { }

    addTask(newTaskValue: string): void {
        this.tasksRepository.addTask(new Task(newTaskValue));
        let tasks = this.tasksRepository.getTasks();
        let results = tasks.map((task) => new TaskOutputDto(task.TaskId, task.Text, task.IsComplete, task.Order));
        this.addTaskOutputBoundary.showTasks(results);
    }
}