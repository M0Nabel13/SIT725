let tasks = []; // Initialize tasks array

function getTasks() {
    return tasks; // Return the tasks array
}

function addTask(task) {
    tasks.push(task); // Add a task to the array
    return task; // Return the added task for confirmation
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        const deletedTask = tasks.splice(index, 1); // Remove task at index
        return deletedTask[0]; // Return the deleted task
    }
    return null; // Return null if index is invalid
}

module.exports = { getTasks, addTask, deleteTask };
