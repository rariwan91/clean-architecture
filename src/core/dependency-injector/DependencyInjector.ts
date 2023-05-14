import { AddTaskUseCaseInteractor } from "../use-cases/add-task/AddTaskUseCaseInteractor";
import { DeleteTaskUseCaseInteractor } from "../use-cases/delete-task/DeleteTaskUseCaseInteractor";
import { EditTaskUseCaseInteractor } from "../use-cases/edit-task/EditTaskUseCaseInteractor";
import { IAddTaskInputBoundary } from "../use-cases/add-task/IAddTaskInputBoundary";
import { IAddTaskOutputBoundary } from "../use-cases/add-task/IAddTaskOutputBoundary";
import { IDeleteTaskInputBoundary } from "../use-cases/delete-task/IDeleteTaskInputBoundary";
import { IDeleteTaskOutputBoundary } from "../use-cases/delete-task/IDeleteTaskOutputBoundary";
import { IEditTaskInputBoundary } from "../use-cases/edit-task/IEditTaskInputBoundary";
import { IEditTaskOutputBoundary } from "../use-cases/edit-task/IEditTaskOutputBoundary";
import { ILoadTasksInputBoundary } from "../use-cases/load-tasks/ILoadTasksInputBoundary";
import { ILoadTasksOutputBoundary } from "../use-cases/load-tasks/ILoadTasksOutputBoundary";
import { IMoveTaskInputBoundary } from "../use-cases/move-task/IMoveTaskInputBoundary";
import { IMoveTaskOutputBoundary } from "../use-cases/move-task/IMoveTaskOutputBoundary";
import { ITasksRepository } from "../use-cases/data-access/ITasksRepository";
import { IToggleTaskCompletionInputBoundary } from "../use-cases/toggle-task-completion/IToggleTaskCompletionInputBoundary";
import { IToggleTaskCompletionOutputBoundary } from "../use-cases/toggle-task-completion/IToggleTaskCompletionOutputBoundary";
import { LoadTasksUseCaseInteractor } from "../use-cases/load-tasks/LoadTasksUseCaseInteractor";
import { MoveTaskUseCaseInteractor } from "../use-cases/move-task/MoveTaskUseCaseInteractor";
import { TasksController } from "../ui-adapters/controllers/TasksController";
import { TasksFileRepository } from "../data-access/FileTasksRepository";
import { TasksPresenter } from "../ui-adapters/presenters/TasksPresenter";
import { ToggleTaskCompletionUseCaseInteractor } from "../use-cases/toggle-task-completion/ToggleTaskCompletionUseCaseInteractor";

export class DependencyInjector {
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

    // Controllers
    tasksController: TasksController;

    constructor() {
        this.tasksRepository = new TasksFileRepository();

        const tasksPresenter = new TasksPresenter();
        this.loadTasksOutputBoundary = tasksPresenter;
        this.addTaskOutputBoundary = tasksPresenter;
        this.editTaskOutputBoundary = tasksPresenter;
        this.deleteTaskOutputBoundary = tasksPresenter;
        this.moveTaskOutputBoundary = tasksPresenter;
        this.toggleTaskCompletionOutputBoundary = tasksPresenter;

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