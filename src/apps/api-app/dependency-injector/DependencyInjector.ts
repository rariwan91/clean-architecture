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
import { TasksApiController } from "../web-adapters/controllers/TasksApiController";
import { TasksApiPresenter } from "../web-adapters/presenters/TasksApiPresenter";
import { TasksFlatFileRepository } from "../../../data-access/flat-file/TasksFlatFileRepository";
import { ToggleTaskCompletionUseCaseInteractor } from "../../../core/use-cases/toggle-task-completion/ToggleTaskCompletionUseCaseInteractor";

export class DependencyInjector {
    // Input Boundaries
    addTaskInputBoundary: IAddTaskInputBoundary;
    deleteTaskInputBoundary: IDeleteTaskInputBoundary;
    editTaskInputBoundary: IEditTaskInputBoundary;
    loadTasksInputBoundary: ILoadTasksInputBoundary;
    moveTaskInputBoundary: IMoveTaskInputBoundary;
    toggleTaskCompletionInputBoundary: IToggleTaskCompletionInputBoundary;

    // Output Boundaries
    addTaskOutputBoundary: IAddTaskOutputBoundary;
    deleteTaskOutputBoundary: IDeleteTaskOutputBoundary;
    editTaskOutputBoundary: IEditTaskOutputBoundary;
    loadTasksOutputBoundary: ILoadTasksOutputBoundary;
    moveTaskOutputBoundary: IMoveTaskOutputBoundary;
    toggleTaskCompletionOutputBoundary: IToggleTaskCompletionOutputBoundary;

    // Repositories
    tasksRepository: ITasksRepository;

    // Web API Controllers
    tasksApiController: TasksApiController;

    // Web API Presenters
    tasksApiPresenter: TasksApiPresenter;

    constructor() {
        this.tasksRepository = new TasksFlatFileRepository();

        this.tasksApiPresenter = new TasksApiPresenter();
        this.addTaskOutputBoundary = this.tasksApiPresenter;
        this.deleteTaskOutputBoundary = this.tasksApiPresenter;
        this.editTaskOutputBoundary = this.tasksApiPresenter;
        this.loadTasksOutputBoundary = this.tasksApiPresenter;
        this.moveTaskOutputBoundary = this.tasksApiPresenter;
        this.toggleTaskCompletionOutputBoundary = this.tasksApiPresenter;

        this.addTaskInputBoundary = new AddTaskUseCaseInteractor(this.tasksRepository, this.addTaskOutputBoundary);
        this.deleteTaskInputBoundary = new DeleteTaskUseCaseInteractor(this.tasksRepository, this.deleteTaskOutputBoundary);
        this.editTaskInputBoundary = new EditTaskUseCaseInteractor(this.tasksRepository, this.editTaskOutputBoundary);
        this.loadTasksInputBoundary = new LoadTasksUseCaseInteractor(this.tasksRepository, this.loadTasksOutputBoundary);
        this.moveTaskInputBoundary = new MoveTaskUseCaseInteractor(this.tasksRepository, this.moveTaskOutputBoundary);
        this.toggleTaskCompletionInputBoundary = new ToggleTaskCompletionUseCaseInteractor(this.tasksRepository, this.toggleTaskCompletionOutputBoundary);

        this.tasksApiController = new TasksApiController(
            this.addTaskInputBoundary,
            this.deleteTaskInputBoundary,
            this.editTaskInputBoundary,
            this.loadTasksInputBoundary,
            this.moveTaskInputBoundary,
            this.toggleTaskCompletionInputBoundary,
            this.tasksApiPresenter);
    }
}