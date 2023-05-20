import { Task } from "../entities/Task";

export interface ITasksRepository {
    getTasks(): Array<Task>;
    addTask(newTask: Task): void;
    editTask(taskId: number, newTaskValue: string): void;
    deleteTask(taskId: number): void;
    moveTask(taskId: number, direction: 'Up' | 'Down'): void;
    toggleTaskCompletion(taskId: number): void;
}