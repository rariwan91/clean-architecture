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
import { LoadTasksUseCaseInteractor } from "../use-cases/load-tasks/LoadTasksUseCaseInteractor";
import { MoveTaskUseCaseInteractor } from "../use-cases/move-task/MoveTaskUseCaseInteractor";
import { TasksController } from "../ui-adapters/controllers/TasksController";
import { TasksFileRepository } from "../data-access/FileTasksRepository";
import { TasksPresenter } from "../ui-adapters/presenters/TasksPresenter";

export class DependencyInjector {
    // Input Boundaries
    loadTasksInputBoundary: ILoadTasksInputBoundary;
    addTaskInputBoundary: IAddTaskInputBoundary;
    editTaskInputBoundary: IEditTaskInputBoundary;
    deleteTaskInputBoundary: IDeleteTaskInputBoundary;
    moveTaskInputBoundary: IMoveTaskInputBoundary;

    // Output Boundaries
    loadTasksOutputBoundary: ILoadTasksOutputBoundary;
    addTaskOutputBoundary: IAddTaskOutputBoundary;
    editTaskOutputBoundary: IEditTaskOutputBoundary;
    deleteTaskOutputBoundary: IDeleteTaskOutputBoundary;
    moveTaskOutputBoundary: IMoveTaskOutputBoundary;

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

        this.loadTasksInputBoundary = new LoadTasksUseCaseInteractor(this.tasksRepository, this.loadTasksOutputBoundary);
        this.addTaskInputBoundary = new AddTaskUseCaseInteractor(this.tasksRepository, this.addTaskOutputBoundary);
        this.editTaskInputBoundary = new EditTaskUseCaseInteractor(this.tasksRepository, this.editTaskOutputBoundary);
        this.deleteTaskInputBoundary = new DeleteTaskUseCaseInteractor(this.tasksRepository, this.deleteTaskOutputBoundary);
        this.moveTaskInputBoundary = new MoveTaskUseCaseInteractor(this.tasksRepository, this.moveTaskOutputBoundary);

        this.tasksController = new TasksController(
            this.loadTasksInputBoundary,
            this.addTaskInputBoundary,
            this.editTaskInputBoundary,
            this.deleteTaskInputBoundary,
            this.moveTaskInputBoundary);
    }
}