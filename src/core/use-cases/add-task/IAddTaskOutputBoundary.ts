import { TaskOutputDto } from "../../models/TaskOutputDto";

export interface IAddTaskOutputBoundary {
    /**
     * Once the new task has been added, this gets called
     * with the newly updated list of tasks.
     * @param tasks 
     */
    taskAdded(tasks: TaskOutputDto[]): void;
}