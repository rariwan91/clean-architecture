import { TaskOutputDto } from "../models/TaskOutputDto";

export interface ILoadTasksOutputBoundary {
    /**
     * Once the tasks are done loading, this gets called
     * to render them to the screen.
     * @param tasks 
     */
    showTasks(tasks: Array<TaskOutputDto>): void;
}