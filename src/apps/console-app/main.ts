import * as rl from 'readline-sync';

import { DependencyInjector } from './dependency-injector/DependencyInjector';

let keepGoing = true;

const dependencyInjector = new DependencyInjector();

const tasksController = dependencyInjector.tasksController;
const taskPresenter = dependencyInjector.tasksPresenter;

while (keepGoing) {
    showTasks();

    console.log();
    console.log('[A]dd new task');
    console.log('[E]dit existing task');
    console.log('[D]elete existing task');
    console.log('[M]ove existing task up/down one spot');
    console.log('[T]oggle existing task completion');
    console.log('[Q]uit the application');
    console.log();

    let answer = rl.question('What would you like to do? ');

    if (answer) {
        switch (answer.charAt(0).toLowerCase()) {
            case 'a':
                addTask();
                continue;
            case 'e':
                editTask();
                continue;
            case 'd':
                deleteTask();
                continue;
            case 'm':
                moveTask();
                continue;
            case 't':
                toggleTaskCompletion();
                continue;
            default:
                keepGoing = false;
                break;
        }
    }

    keepGoing = false;
}

console.log('Exiting To-Do List Application...');

function addTask(): void {
    let newTask = rl.question('Enter new task: ');
    tasksController.addTask(newTask);
}

function editTask(): void {
    let taskNumber = rl.question('Which task number? ');
    let newTaskValue = rl.question('Enter new task value: ');

    let taskId = parseInt(taskNumber);

    tasksController.editTask(taskId, newTaskValue);
}

function deleteTask(): void {
    let taskNumber = rl.question('Which task number? ');
    console.log(`task number: ${taskNumber}`);

    let taskId = parseInt(taskNumber);

    tasksController.deleteTask(taskId);
}

function moveTask(): void {
    let taskNumber = rl.question('Which task number? ');
    let direction = getDirection();

    let taskId = parseInt(taskNumber);

    tasksController.moveTask(taskId, direction);
}

function toggleTaskCompletion(): void {
    let taskNumber = rl.question('Which task number? ');

    let taskId = parseInt(taskNumber);

    tasksController.toggleTask(taskId);
}

function getDirection(): 'Up' | 'Down' {
    let answer = rl.question('[U]p or [D]own? ');

    if (answer.charAt(0).toLowerCase() == 'u') {
        return 'Up';
    }

    if (answer.charAt(0).toLowerCase() == 'd') {
        return 'Down';
    }

    return getDirection();
}

function showTasks(): void {
    console.clear();
    console.log('To-Do List Application');
    console.log();

    taskPresenter.tasks.forEach(task => {
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