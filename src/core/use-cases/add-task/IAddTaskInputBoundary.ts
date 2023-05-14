export interface IAddTaskInputBoundary {
    /**
     * Call this to add a new task to the list.
     * @param newTaskValue 
     */
    addTask(newTaskValue: string): void;
}