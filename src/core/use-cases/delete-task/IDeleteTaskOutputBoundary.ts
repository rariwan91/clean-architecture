import { TaskOutputDto } from "../../models/TaskOutputDto";

export interface IDeleteTaskOutputBoundary {
    /**
     * Once the task has been removed, this gets called
     * with the newly updated list of tasks.
     * @param tasks 
     */
    taskDeleted(tasks: TaskOutputDto[]): void;
}