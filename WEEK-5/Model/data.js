// Model/data.js

// An array to store tasks
let tasks = [];

// Function to add a task
export function addTask(task) {
    tasks.push(task);
    return tasks;
}

// Function to get all tasks
export function getTasks() {
    return tasks;
}
