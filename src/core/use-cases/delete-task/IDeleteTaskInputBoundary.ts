export interface IDeleteTaskInputBoundary {
    /**
     * Call this to remove a task from the list.
     * @param taskId 
     */
    deleteTask(taskId: number): void;
}