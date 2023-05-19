import { DependencyInjector } from './dependency-injector/DependencyInjector';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const port = 3000;
const app = express();

// Use "dependency injection" so I don't have to set all this stuff up here.
const dependencyInjector = new DependencyInjector();
const tasksApiController = dependencyInjector.tasksApiController;

app.use(morgan('common'));
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use('/tasks', tasksApiController.router);

app.listen(port, () => {
    console.log(`web api listening on http://localhost:${port}`);
});
