import { TaskOutputDto } from "../../models/TaskOutputDto";

export interface IToggleTaskCompletionOutputBoundary {
    /**
     * Once the task's completion has been toggled, this gets called
     * with the newly updated list of tasks
     * @param tasks 
     */
    taskCompletionToggled(tasks: TaskOutputDto[]): void;
}