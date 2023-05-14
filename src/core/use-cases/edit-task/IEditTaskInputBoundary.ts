export interface IEditTaskInputBoundary {
    /**
     * Call this to edit a specific task.
     * @param taskId 
     * @param newTaskValue 
     */
    editTask(taskId: number, newTaskValue: string): void;
}