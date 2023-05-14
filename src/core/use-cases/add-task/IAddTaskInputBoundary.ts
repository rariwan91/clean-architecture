export interface IAddTaskInputBoundary {
    /**
     * Call this to add a new task to the list.
     * @param newTask 
     */
    addTask(newTask: string): void;
}