import { TaskOutputDto } from "../../models/TaskOutputDto";

export interface IMoveTaskOutputBoundary {
    /**
     * Once the task has been removed, this gets called
     * with the newly updated list of tasks.
     * @param tasks 
     */
    taskMoved(tasks: TaskOutputDto[]): void;
}