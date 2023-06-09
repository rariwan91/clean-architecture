import { AddTaskUseCaseInteractor } from "../../../core/use-cases/add-task/AddTaskUseCaseInteractor";
import { DeleteTaskUseCaseInteractor } from "../../../core/use-cases/delete-task/DeleteTaskUseCaseInteractor";
import { EditTaskUseCaseInteractor } from "../../../core/use-cases/edit-task/EditTaskUseCaseInteractor";
import { IAddTaskInputBoundary } from "../../../core/use-cases/add-task/IAddTaskInputBoundary";
import { IAddTaskOutputBoundary } from "../../../core/use-cases/add-task/IAddTaskOutputBoundary";
import { IDeleteTaskInputBoundary } from "../../../core/use-cases/delete-task/IDeleteTaskInputBoundary";
import { IDeleteTaskOutputBoundary } from "../../../core/use-cases/delete-task/IDeleteTaskOutputBoundary";
import { IEditTaskInputBoundary } from "../../../core/use-cases/edit-task/IEditTaskInputBoundary";
import { IEditTaskOutputBoundary } from "../../../core/use-cases/edit-task/IEditTaskOutputBoundary";
import { ILoadTasksInputBoundary } from "../../../core/use-cases/load-tasks/ILoadTasksInputBoundary";
import { ILoadTasksOutputBoundary } from "../../../core/use-cases/load-tasks/ILoadTasksOutputBoundary";
import { IMoveTaskInputBoundary } from "../../../core/use-cases/move-task/IMoveTaskInputBoundary";
import { IMoveTaskOutputBoundary } from "../../../core/use-cases/move-task/IMoveTaskOutputBoundary";
import { ITasksRepository } from "../../../core/data-access/ITasksRepository";
import { IToggleTaskCompletionInputBoundary } from "../../../core/use-cases/toggle-task-completion/IToggleTaskCompletionInputBoundary";
import { IToggleTaskCompletionOutputBoundary } from "../../../core/use-cases/toggle-task-completion/IToggleTaskCompletionOutputBoundary";
import { LoadTasksUseCaseInteractor } from "../../../core/use-cases/load-tasks/LoadTasksUseCaseInteractor";
import { MoveTaskUseCaseInteractor } from "../../../core/use-cases/move-task/MoveTaskUseCaseInteractor";
import { TasksController } from "../console-adapters/controllers/TasksController";
import { TasksFlatFileRepository } from "../../../data-access/flat-file/TasksFlatFileRepository";
import { TasksPresenter } from "../console-adapters/presenters/TasksPresenter";
import { ToggleTaskCompletionUseCaseInteractor } from "../../../core/use-cases/toggle-task-completion/ToggleTaskCompletionUseCaseInteractor";

export class DependencyInjector {
    // Back-End Dependencies
    // Input Boundaries
    loadTasksInputBoundary: ILoadTasksInputBoundary;
    addTaskInputBoundary: IAddTaskInputBoundary;
    editTaskInputBoundary: IEditTaskInputBoundary;
    deleteTaskInputBoundary: IDeleteTaskInputBoundary;
    moveTaskInputBoundary: IMoveTaskInputBoundary;
    toggleTaskCompletionInputBoundary: IToggleTaskCompletionInputBoundary;

    // Output Boundaries
    loadTasksOutputBoundary: ILoadTasksOutputBoundary;
    addTaskOutputBoundary: IAddTaskOutputBoundary;
    editTaskOutputBoundary: IEditTaskOutputBoundary;
    deleteTaskOutputBoundary: IDeleteTaskOutputBoundary;
    moveTaskOutputBoundary: IMoveTaskOutputBoundary;
    toggleTaskCompletionOutputBoundary: IToggleTaskCompletionOutputBoundary;

    // Repositories
    tasksRepository: ITasksRepository;

    // Front-End Dependencies
    // UI Controllers
    tasksController: TasksController;

    // UI Presenters
    tasksPresenter: TasksPresenter;

    constructor() {
        this.tasksRepository = new TasksFlatFileRepository();

        this.tasksPresenter = new TasksPresenter();
        this.loadTasksOutputBoundary = this.tasksPresenter;
        this.addTaskOutputBoundary = this.tasksPresenter;
        this.editTaskOutputBoundary = this.tasksPresenter;
        this.deleteTaskOutputBoundary = this.tasksPresenter;
        this.moveTaskOutputBoundary = this.tasksPresenter;
        this.toggleTaskCompletionOutputBoundary = this.tasksPresenter;

        this.loadTasksInputBoundary = new LoadTasksUseCaseInteractor(this.tasksRepository, this.loadTasksOutputBoundary);
        this.addTaskInputBoundary = new AddTaskUseCaseInteractor(this.tasksRepository, this.addTaskOutputBoundary);
        this.editTaskInputBoundary = new EditTaskUseCaseInteractor(this.tasksRepository, this.editTaskOutputBoundary);
        this.deleteTaskInputBoundary = new DeleteTaskUseCaseInteractor(this.tasksRepository, this.deleteTaskOutputBoundary);
        this.moveTaskInputBoundary = new MoveTaskUseCaseInteractor(this.tasksRepository, this.moveTaskOutputBoundary);
        this.toggleTaskCompletionInputBoundary = new ToggleTaskCompletionUseCaseInteractor(this.tasksRepository, this.toggleTaskCompletionOutputBoundary);

        this.tasksController = new TasksController(
            this.loadTasksInputBoundary,
            this.addTaskInputBoundary,
            this.editTaskInputBoundary,
            this.deleteTaskInputBoundary,
            this.moveTaskInputBoundary,
            this.toggleTaskCompletionInputBoundary);
    }
}