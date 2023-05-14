export interface IToggleTaskCompletionInputBoundary {
    /**
     * Call this to toggle a specific task's completion
     * @param taskId
     */
    toggleTaskCompletion(taskId: number): void;
}