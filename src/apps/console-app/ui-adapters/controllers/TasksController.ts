import { IAddTaskInputBoundary } from "../../../../core/use-cases/add-task/IAddTaskInputBoundary";
import { IDeleteTaskInputBoundary } from "../../../../core/use-cases/delete-task/IDeleteTaskInputBoundary";
import { IEditTaskInputBoundary } from "../../../../core/use-cases/edit-task/IEditTaskInputBoundary";
import { ILoadTasksInputBoundary } from "../../../../core/use-cases/load-tasks/ILoadTasksInputBoundary";
import { IMoveTaskInputBoundary } from "../../../../core/use-cases/move-task/IMoveTaskInputBoundary";
import { IToggleTaskCompletionInputBoundary } from "../../../../core/use-cases/toggle-task-completion/IToggleTaskCompletionInputBoundary";

export class TasksController {
    constructor(
        private loadTasksInputBoundary: ILoadTasksInputBoundary,
        private addTaskInputBoundary: IAddTaskInputBoundary,
        private editTaskInputBoundary: IEditTaskInputBoundary,
        private deleteTaskInputBoundary: IDeleteTaskInputBoundary,
        private moveTaskInputBoundary: IMoveTaskInputBoundary,
        private toggleTaskCompletionInputBoundary: IToggleTaskCompletionInputBoundary) { }

    loadTasks(): void {
        this.loadTasksInputBoundary.loadTasks();
    }

    addTask(newTask: string): void {
        this.addTaskInputBoundary.addTask(newTask);
    }

    editTask(taskId: number, newTaskValue: string): void {
        this.editTaskInputBoundary.editTask(taskId, newTaskValue);
    }

    deleteTask(taskId: number): void {
        this.deleteTaskInputBoundary.deleteTask(taskId);
    }

    moveTask(taskId: number, direction: 'Up' | 'Down'): void {
        this.moveTaskInputBoundary.moveTask(taskId, direction);
    }

    toggleTask(taskId: number): void {
        this.toggleTaskCompletionInputBoundary.toggleTaskCompletion(taskId);
    }
}