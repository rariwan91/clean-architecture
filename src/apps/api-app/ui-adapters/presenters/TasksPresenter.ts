import { ILoadTasksOutputBoundary } from "../../../../core/use-cases/load-tasks/ILoadTasksOutputBoundary";
import { TaskOutputDto } from "../../../../core/use-cases/models/TaskOutputDto";
import { TaskViewModel } from "../view-models/TaskViewModel";

export class TasksPresenter implements ILoadTasksOutputBoundary {
    tasks: TaskViewModel[] = [];

    showTasks(tasks: TaskOutputDto[]): TaskViewModel[] {
        return this.tasks = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
    }
}
