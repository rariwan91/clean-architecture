import { ITasksRepository } from "../use-cases/data-access/ITasksRepository";
import { Task } from "../entities/Task";
import fs from 'fs';
import path from 'path';

interface SimpleTaskDto {
    TaskId: number,
    Text: string,
    IsComplete: boolean,
    Order: number
}

export class TasksFileRepository implements ITasksRepository {
    private tasks: Task[] = [];

    constructor() {
        let tasks: Task[] = [];

        let tasksFromFile: SimpleTaskDto[] = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../data/tasks.json'), 'utf-8'));

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
        const maxTaskIdTask = this.tasks.reduce((prevTask, currentTask) => prevTask.TaskId > currentTask.TaskId ? prevTask : currentTask);
        const maxOrderTask = this.tasks.reduce((prevTask, currentTask) => prevTask.Order > currentTask.Order ? prevTask : currentTask);

        newTask.TaskId = maxTaskIdTask.TaskId + 1;
        newTask.Order = maxOrderTask.Order + 1;

        this.tasks.push(newTask);

        this.saveTasks();
    }

    editTask(taskId: number, newTaskValue: string): void {
        let doesTaskExist = this.tasks.some((task) => task.TaskId === taskId);

        if (!doesTaskExist) {
            throw new Error(`TaskId ${taskId} doesn't exist.`);
        }

        let taskToEdit = this.tasks.filter((task) => task.TaskId === taskId)[0];
        taskToEdit.Text = newTaskValue;

        this.saveTasks();
    }

    deleteTask(taskId: number): void {
        let doesTaskExist = this.tasks.some((task) => task.TaskId === taskId);

        if (!doesTaskExist) {
            throw new Error(`TaskId ${taskId} doesn't exist.`);
        }

        let taskIndex = this.tasks.findIndex((task) => task.TaskId === taskId);

        this.tasks.splice(taskIndex, 1);

        this.saveTasks();
    }

    private saveTasks(): void {
        const simplifiedTasks: SimpleTaskDto[] = [];

        this.tasks.forEach(task => {
            simplifiedTasks.push({
                TaskId: task.TaskId,
                Text: task.Text,
                IsComplete: task.IsComplete,
                Order: task.Order
            });
        });

        fs.writeFileSync(path.join(__dirname, '../../../data/tasks.json'), JSON.stringify(simplifiedTasks));
    }
}