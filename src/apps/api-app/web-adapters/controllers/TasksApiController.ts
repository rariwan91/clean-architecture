import { IAddTaskInputBoundary } from '../../../../core/use-cases/add-task/IAddTaskInputBoundary';
import { IDeleteTaskInputBoundary } from '../../../../core/use-cases/delete-task/IDeleteTaskInputBoundary';
import { IEditTaskInputBoundary } from '../../../../core/use-cases/edit-task/IEditTaskInputBoundary';
import { ILoadTasksInputBoundary } from '../../../../core/use-cases/load-tasks/ILoadTasksInputBoundary';
import { IMoveTaskInputBoundary } from '../../../../core/use-cases/move-task/IMoveTaskInputBoundary';
import { IToggleTaskCompletionInputBoundary } from '../../../../core/use-cases/toggle-task-completion/IToggleTaskCompletionInputBoundary';
import { TasksApiPresenter } from '../presenters/TasksApiPresenter';
import express from 'express';

export class TasksApiController {
    router: express.Router;

    constructor(
        private addTaskInputBoundary: IAddTaskInputBoundary,
        private deleteTaskInputBoundary: IDeleteTaskInputBoundary,
        private editTaskInputBoundary: IEditTaskInputBoundary,
        private loadTasksInputBoundary: ILoadTasksInputBoundary,
        private moveTaskInputBoundary: IMoveTaskInputBoundary,
        private toggleTaskCompletionInputBoundary: IToggleTaskCompletionInputBoundary,
        private tasksPresenter: TasksApiPresenter
    ) {
        this.router = express.Router();

        this.router.post('/addTask', (req, res) => {
            this.addTaskInputBoundary.addTask(req.body.newTaskValue);
            res.send(this.tasksPresenter.tasks);
        });

        this.router.post('/deleteTask', (req, res) => {
            this.deleteTaskInputBoundary.deleteTask(req.body.taskId);
            res.send(this.tasksPresenter.tasks);
        });

        this.router.post('/editTask', (req, res) => {
            this.editTaskInputBoundary.editTask(req.body.taskId, req.body.newTaskValue);
            res.send(this.tasksPresenter.tasks);
        });

        this.router.get('/loadTasks', (req, res) => {
            this.loadTasksInputBoundary.loadTasks();
            res.send(this.tasksPresenter.tasks);
        });

        this.router.post('/moveTask', (req, res) => {
            this.moveTaskInputBoundary.moveTask(req.body.taskId, req.body.direction);
            res.send(this.tasksPresenter.tasks);
        });

        this.router.post('/toggleTaskCompletion', (req, res) => {
            this.toggleTaskCompletionInputBoundary.toggleTaskCompletion(req.body.taskId);
            res.send(this.tasksPresenter.tasks);
        });
    }
}
