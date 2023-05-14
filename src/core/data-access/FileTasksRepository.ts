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
    private filepath = path.join(__dirname, '../../../data/tasks.json');;
    private tasks: Task[] = [];

    constructor() {
        this.loadTasks();
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

    moveTask(taskId: number, direction: 'Up' | 'Down'): void {
        let doesTaskExist = this.tasks.some((task) => task.TaskId === taskId);

        if (!doesTaskExist) {
            throw new Error(`TaskId ${taskId} doesn't exist.`);
        }

        let taskIndex = this.tasks.findIndex((task) => task.TaskId === taskId);
        let otherIndex = taskIndex + 1;

        if (direction === 'Up') {
            otherIndex = taskIndex - 1;
        }

        let tempOrder = this.tasks[taskIndex].Order;
        this.tasks[taskIndex].Order = this.tasks[otherIndex].Order;
        this.tasks[otherIndex].Order = tempOrder;

        this.saveTasks();
    }

    toggleTaskCompletion(taskId: number): void {
        let doesTaskExist = this.tasks.some((task) => task.TaskId === taskId);

        if (!doesTaskExist) {
            throw new Error(`TaskId ${taskId} doesn't exist.`);
        }

        let taskIndex = this.tasks.findIndex((task) => task.TaskId === taskId);

        this.tasks[taskIndex].IsComplete = !this.tasks[taskIndex].IsComplete;

        this.saveTasks();
    }

    /**
     * Load tasks from the data/tasks.json file.
     * Creates the file if it doesn't exist.
     */
    private loadTasks(): void {
        if (!fs.existsSync(this.filepath)) {
            this.createInitialTasks();
        }
        else {
            let tasksFromFile: SimpleTaskDto[] = JSON.parse(fs.readFileSync(this.filepath, 'utf-8'));

            tasksFromFile.forEach(taskFromFile => {
                let newTask = new Task(taskFromFile.Text);
                newTask.TaskId = taskFromFile.TaskId;
                newTask.IsComplete = taskFromFile.IsComplete;
                newTask.Order = taskFromFile.Order;
                this.tasks.push(newTask);
            });
        }
    }

    /**
     * Creates initial tasks values when the
     * data/tasks.json file doesn't exist.
     */
    private createInitialTasks(): void {
        this.tasks = [
            new Task('Task 1'),
            new Task('Task 2'),
            new Task('Task 3')
        ];

        this.tasks[0].TaskId = 1;
        this.tasks[0].Order = 1;

        this.tasks[1].TaskId = 2;
        this.tasks[1].Order = 3;

        this.tasks[2].TaskId = 3;
        this.tasks[2].Order = 2;
        this.tasks[2].IsComplete = true;

        this.saveTasks();
    }

    /**
     * Saves the current tasks to the data/tasks.json file.
     */
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