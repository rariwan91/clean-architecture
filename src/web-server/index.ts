import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'To-Do List', message: 'Test message' });
});

app.listen(port, () => {
    console.log(`To-Do List app listening on http://localhost:${port}`);
});
