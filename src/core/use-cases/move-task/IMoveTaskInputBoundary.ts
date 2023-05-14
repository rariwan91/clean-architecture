export interface IMoveTaskInputBoundary {
    /**
     * Call this to move a task in the list up/down a spot.
     * @param taskId
     * @param direction
     */
    moveTask(taskId: number, direction: 'Up' | 'Down'): void;
}