import { IAddTaskOutputBoundary } from "../../../../core/use-cases/add-task/IAddTaskOutputBoundary";
import { IDeleteTaskOutputBoundary } from "../../../../core/use-cases/delete-task/IDeleteTaskOutputBoundary";
import { IEditTaskOutputBoundary } from "../../../../core/use-cases/edit-task/IEditTaskOutputBoundary";
import { ILoadTasksOutputBoundary } from "../../../../core/use-cases/load-tasks/ILoadTasksOutputBoundary";
import { IMoveTaskOutputBoundary } from "../../../../core/use-cases/move-task/IMoveTaskOutputBoundary";
import { IToggleTaskCompletionOutputBoundary } from "../../../../core/use-cases/toggle-task-completion/IToggleTaskCompletionOutputBoundary";
import { TaskOutputDto } from "../../../../core/models/TaskOutputDto";
import { TaskViewModel } from "../view-models/TaskViewModel";

export class TasksPresenter implements IAddTaskOutputBoundary,
    IDeleteTaskOutputBoundary,
    IEditTaskOutputBoundary,
    ILoadTasksOutputBoundary,
    IMoveTaskOutputBoundary,
    IToggleTaskCompletionOutputBoundary {

    tasks: TaskOutputDto[] = [];

    taskAdded(tasks: TaskOutputDto[]): void {
        this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }

    taskDeleted(tasks: TaskOutputDto[]): void {
        this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }

    taskEdited(tasks: TaskOutputDto[]): void {
        this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }

    tasksLoaded(tasks: TaskOutputDto[]): void {
        this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }

    taskMoved(tasks: TaskOutputDto[]): void {
        this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }

    taskCompletionToggled(tasks: TaskOutputDto[]): void {
        this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }
}