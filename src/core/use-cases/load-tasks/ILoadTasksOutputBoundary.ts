import { TaskOutputDto } from "../../models/TaskOutputDto";

export interface ILoadTasksOutputBoundary {
    /**
     * Once the tasks are done this gets called to convert them
     * into view models.
     * @param tasks 
     */
    tasksLoaded(tasks: TaskOutputDto[]): void;
}