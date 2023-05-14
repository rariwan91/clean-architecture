import { TaskOutputDto } from "../models/TaskOutputDto";

export interface IMoveTaskOutputBoundary {
    /**
     * Once the task has been removed, this gets called
     * to render the newly updated list of tasks to the screen.
     * @param tasks 
     */
    showTasks(tasks: Array<TaskOutputDto>): void;
}