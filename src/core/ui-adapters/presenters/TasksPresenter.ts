import { IAddTaskOutputBoundary } from "../../use-cases/add-task/IAddTaskOutputBoundary";
import { ILoadTasksOutputBoundary } from "../../use-cases/load-tasks/ILoadTasksOutputBoundary";
import { TaskOutputDto } from "../../use-cases/models/TaskOutputDto";
import { TaskViewModel } from "../view-models/TaskViewModel";

export class TasksPresenter implements ILoadTasksOutputBoundary, IAddTaskOutputBoundary {
    showTasks(tasks: TaskOutputDto[]): void {
        let results = tasks.map((task) => new TaskViewModel(task.TaskId, task.Text, task.IsComplete, task.Order));
        console.clear();
        console.log('To-Do List Application');

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