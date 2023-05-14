import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}));

const port = 3000;

app.get('/loadTasks', (req, res) => {
    res.send([
        {
            TaskId: 1,
            Text: 'Task 1',
            IsComplete: false,
            Order: 1
        },
        {
            TaskId: 2,
            Text: 'Task 2',
            IsComplete: true,
            Order: 2
        },
        {
            TaskId: 3,
            Text: 'Task 3',
            IsComplete: false,
            Order: 3
        }
    ]);
});

app.listen(port, () => {
    console.log(`web api listening on http://localhost:${port}`);
});
