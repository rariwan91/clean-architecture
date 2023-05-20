import { TaskOutputDto } from "../../models/TaskOutputDto";

export interface IEditTaskOutputBoundary {
    /**
     * Once the new task has been edited, this gets called
     * with the newly updated list of tasks.
     * @param tasks 
     */
    taskEdited(tasks: TaskOutputDto[]): void;
}