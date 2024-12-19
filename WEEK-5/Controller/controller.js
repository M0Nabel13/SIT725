const model = require('../Model/data');

function fetchTasks(req, res) {
    res.json(model.getTasks());
}

function createTask(req, res) {
    const task = req.body;
    model.addTask(task);
    res.status(201).json({ message: 'Task added', task });
}

module.exports = { fetchTasks, createTask };
