import { Task } from "../../entities/Task";

export interface ITasksRepository {
    getTasks(): Array<Task>;
    addTask(newTask: Task): void;
    editTask(taskId: number, newTaskValue: string): void;
}