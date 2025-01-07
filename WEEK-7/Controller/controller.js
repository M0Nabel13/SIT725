const { getTasks, addTask, deleteTask } = require('../Model/data');

// Fetch all tasks
exports.fetchTasks = (req, res) => {
    res.status(200).json(getTasks());
};

// Add a new task
exports.createTask = (req, res) => {
    const newTask = req.body;
    const createdTask = addTask(newTask);
    res.status(201).json({ message: "Task added", task: createdTask });
};

// Delete a task by index
exports.deleteTask = (req, res) => {
    const { index } = req.params;
    const deleted = deleteTask(parseInt(index, 10));
    if (deleted) {
        res.status(200).json({ message: "Task deleted", task: deleted });
    } else {
        res.status(404).json({ message: "Task not found" });
    }
};
