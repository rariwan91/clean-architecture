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
import { ITasksRepository } from "../use-cases/data-access/ITasksRepository";
import { LoadTasksUseCaseInteractor } from "../use-cases/load-tasks/LoadTasksUseCaseInteractor";
import { TasksController } from "../ui-adapters/controllers/TasksController";
import { TasksFileRepository } from "../data-access/FileTasksRepository";
import { TasksPresenter } from "../ui-adapters/presenters/TasksPresenter";

export class DependencyInjector {
    // Input Boundaries
    loadTasksInputBoundary: ILoadTasksInputBoundary;
    addTaskInputBoundary: IAddTaskInputBoundary;
    editTaskInputBoundary: IEditTaskInputBoundary;
    deleteTaskInputBoundary: IDeleteTaskInputBoundary;

    // Output Boundaries
    loadTasksOutputBoundary: ILoadTasksOutputBoundary;
    addTaskOutputBoundary: IAddTaskOutputBoundary;
    editTaskOutputBoundary: IEditTaskOutputBoundary;
    deleteTaskOutputBoundary: IDeleteTaskOutputBoundary;

    // Repositories
    tasksRepository: ITasksRepository;

    // Controllers
    tasksController: TasksController;

    constructor() {
        this.tasksRepository = new TasksFileRepository();
        this.loadTasksOutputBoundary = new TasksPresenter();
        this.addTaskOutputBoundary = new TasksPresenter();
        this.editTaskOutputBoundary = new TasksPresenter();
        this.deleteTaskOutputBoundary = new TasksPresenter();

        this.loadTasksInputBoundary = new LoadTasksUseCaseInteractor(this.tasksRepository, this.loadTasksOutputBoundary);
        this.addTaskInputBoundary = new AddTaskUseCaseInteractor(this.tasksRepository, this.addTaskOutputBoundary);
        this.editTaskInputBoundary = new EditTaskUseCaseInteractor(this.tasksRepository, this.editTaskOutputBoundary);
        this.deleteTaskInputBoundary = new DeleteTaskUseCaseInteractor(this.tasksRepository, this.deleteTaskOutputBoundary);

        this.tasksController = new TasksController(
            this.loadTasksInputBoundary,
            this.addTaskInputBoundary,
            this.editTaskInputBoundary,
            this.deleteTaskInputBoundary);
    }
}