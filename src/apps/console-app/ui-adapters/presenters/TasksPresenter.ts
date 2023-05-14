import { IAddTaskOutputBoundary } from "../../../../core/use-cases/add-task/IAddTaskOutputBoundary";
import { IDeleteTaskOutputBoundary } from "../../../../core/use-cases/delete-task/IDeleteTaskOutputBoundary";
import { IEditTaskOutputBoundary } from "../../../../core/use-cases/edit-task/IEditTaskOutputBoundary";
import { ILoadTasksOutputBoundary } from "../../../../core/use-cases/load-tasks/ILoadTasksOutputBoundary";
import { TaskOutputDto } from "../../../../core/use-cases/models/TaskOutputDto";
import { TaskViewModel } from "../view-models/TaskViewModel";

export class TasksPresenter implements ILoadTasksOutputBoundary,
    IAddTaskOutputBoundary,
    IEditTaskOutputBoundary,
    IDeleteTaskOutputBoundary {
    showTasks(tasks: TaskOutputDto[]): void {
        let results = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
        console.clear();
        console.log('To-Do List Application');
        console.log();

        results.forEach(task => {
            let line = `[${task.TaskId}] - ${task.Text}`;
            if (task.IsComplete) {
                line = "\u2714 " + line;
            }
            else {
                line = "\u2717 " + line;
            }

            console.log(line);
        });
    }
}