export class TaskOutputDto {
    TaskId: number;
    Text: string;
    IsComplete: boolean;
    Order: number;

    constructor(taskId: number, text: string, isComplete: boolean, order: number) {
        this.TaskId = taskId;
        this.Text = text;
        this.IsComplete = isComplete;
        this.Order = order;
    }
}