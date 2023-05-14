import * as rl from 'readline-sync';

import { DependencyInjector } from '../../core/dependency-injector/DependencyInjector';

let keepGoing = true;

const dependencyInjector = new DependencyInjector();

const tasksController = dependencyInjector.tasksController;

while (keepGoing) {
    tasksController.loadTasks();

    console.log();
    console.log('[A]dd new task');
    console.log('[E]dit existing task');
    console.log('[D]elete existing task');
    console.log('[M]ove existing task up/down one spot');
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
    console.log(`task number: ${taskNumber}`);

    let newTaskValue = rl.question('Enter new task value: ');
    console.log(`newTaskValue: ${newTaskValue}`);
}

function deleteTask(): void {
    let taskNumber = rl.question('Which task number? ');
    console.log(`task number: ${taskNumber}`);
}

function moveTask(): void {
    let taskNumber = rl.question('Which task number? ');
    console.log(`task number: ${taskNumber}`);

    let direction = rl.question('[U]p or [D]own? ');
    console.log(`direction: ${direction}`);
}