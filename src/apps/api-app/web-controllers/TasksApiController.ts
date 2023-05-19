import { ILoadTasksInputBoundary } from '../../../core/use-cases/load-tasks/ILoadTasksInputBoundary';
import { ILoadTasksOutputBoundary } from '../../../core/use-cases/load-tasks/ILoadTasksOutputBoundary';
import express from 'express';

export class TasksApiController {
    router: express.Router;

    constructor(
        private loadTasksInputBoundary: ILoadTasksInputBoundary,
        private loadTasksOutputBoundary: ILoadTasksOutputBoundary
    ) {
        this.router = express.Router();

        this.router.get('/loadTasks', (req, res) => {
            this.loadTasksInputBoundary.loadTasks();
            let tasks = this.loadTasksOutputBoundary;
        });
    }
}
