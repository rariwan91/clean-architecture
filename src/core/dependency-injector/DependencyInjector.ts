import { AddTaskUseCaseInteractor } from "../use-cases/add-task/AddTaskUseCaseInteractor";
import { IAddTaskInputBoundary } from "../use-cases/add-task/IAddTaskInputBoundary";
import { IAddTaskOutputBoundary } from "../use-cases/add-task/IAddTaskOutputBoundary";
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

    // Output Boundaries
    loadTasksOutputBoundary: ILoadTasksOutputBoundary;
    addTaskOutputBoundary: IAddTaskOutputBoundary;

    // Repositories
    tasksRepository: ITasksRepository;

    // Controllers
    tasksController: TasksController;

    constructor() {
        this.tasksRepository = new TasksFileRepository();
        this.loadTasksOutputBoundary = new TasksPresenter();
        this.addTaskOutputBoundary = new TasksPresenter();
        this.loadTasksInputBoundary = new LoadTasksUseCaseInteractor(this.tasksRepository, this.loadTasksOutputBoundary);
        this.addTaskInputBoundary = new AddTaskUseCaseInteractor(this.tasksRepository, this.addTaskOutputBoundary);

        this.tasksController = new TasksController(this.loadTasksInputBoundary, this.addTaskInputBoundary);
    }
}