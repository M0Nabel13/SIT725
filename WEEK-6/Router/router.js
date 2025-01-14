const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];

app.get('/api/tasks', (req, res) => {
    res.status(200).json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const { description } = req.body;
    if (!description || typeof description !== 'string') {
        return res.status(400).json({ error: 'Invalid task data' });
    }
    if (tasks.some(task => task.description === description)) {
        return res.status(400).json({ error: 'Task already exists' });
    }
    tasks.push({ description });
    res.status(201).json({ description });
});

app.delete('/api/tasks/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index) || index < 0 || index >= tasks.length) {
        return res.status(400).json({ error: 'Invalid task index' });
    }
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
});

module.exports = app;

if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
