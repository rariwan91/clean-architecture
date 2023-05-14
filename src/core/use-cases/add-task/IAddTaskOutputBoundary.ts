import { TaskOutputDto } from "../models/TaskOutputDto";

export interface IAddTaskOutputBoundary {
    /**
     * Once the new task has been added, this gets called
     * to render the newly updated list of tasks to the screen.
     * @param tasks 
     */
    showTasks(tasks: Array<TaskOutputDto>): void;
}