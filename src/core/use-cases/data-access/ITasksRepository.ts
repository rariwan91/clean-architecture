import { Task } from "../../entities/Task";

export interface ITasksRepository {
    getTasks(): Array<Task>;
    addTask(newTask: Task): void;
}