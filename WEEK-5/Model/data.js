let tasks = [];

function getTasks() {
    return tasks;
}

function addTask(task) {
    tasks.push(task);
}

module.exports = { getTasks, addTask };
