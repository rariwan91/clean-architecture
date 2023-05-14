import { TaskOutputDto } from "../models/TaskOutputDto";

export interface IToggleTaskCompletionOutputBoundary {
    /**
     * Once the task's completion has been toggled, this gets called
     * to render the newly updated list of tasks to the screen.
     * @param tasks 
     */
    showTasks(tasks: Array<TaskOutputDto>): void;
}