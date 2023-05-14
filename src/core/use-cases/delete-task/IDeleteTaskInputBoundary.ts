export interface IDeleteTaskInputBoundary {
    /**
     * Call this to remove a task from the list.
     * @param newTask 
     */
    deleteTask(taskId: number): void;
}