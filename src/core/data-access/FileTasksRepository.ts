import { ITasksRepository } from "../use-cases/data-access/ITasksRepository";
import { SimpleTaskDto } from "./SimpleTaskDto";
import { Task } from "../entities/Task";
import fs from 'fs';
import path from 'path';

export class TasksFileRepository implements ITasksRepository {
    private tasks: Task[] = [];

    constructor() {
        let tasks: Task[] = [];

        let tasksFromFile: SimpleTaskDto[] = JSON.parse(fs.readFileSync(path.join(__dirname, 'tasks.json'), 'utf-8'));

        tasksFromFile.forEach(taskFromFile => {
            let newTask = new Task(taskFromFile.Text);
            newTask.TaskId = taskFromFile.TaskId;
            newTask.IsComplete = taskFromFile.IsComplete;
            newTask.Order = taskFromFile.Order;
            tasks.push(newTask);
        });

        this.tasks = tasks;
    }

    getTasks(): Task[] {
        let sortedTasks = this.tasks.sort((a, b) => a.Order - b.Order);
        return sortedTasks;
    }

    addTask(newTask: Task): void {
        newTask.TaskId = this.tasks.length + 1;
        newTask.Order = this.tasks.length + 1;

        this.tasks.push(newTask);

        const simplifiedTasks: SimpleTaskDto[] = [];

        this.tasks.forEach(task => {
            simplifiedTasks.push({
                TaskId: task.TaskId,
                Text: task.Text,
                IsComplete: task.IsComplete,
                Order: task.Order
            });
        });

        fs.writeFileSync(path.join(__dirname, 'tasks.json'), JSON.stringify(simplifiedTasks));
    }
}