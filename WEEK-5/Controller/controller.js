// Controller/controller.js

// Import functions from the Model
import { addTask, getTasks } from '../Model/data.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a task and update the list
    const addTaskToModel = () => {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task); // Add task to the Model
            updateView();
            taskInput.value = ''; // Clear the input field
        }
    };

    // Function to update the View with tasks from the Model
    const updateView = () => {
        const tasks = getTasks(); // Get tasks from the Model
        taskList.innerHTML = ''; // Clear existing tasks
        tasks.forEach((task) => {
            const listItem = document.createElement('li');
            listItem.textContent = task; // Set task text
            taskList.appendChild(listItem); // Add to the list
        });
    };

    // Attach event listener to the button
    addTaskBtn.addEventListener('click', addTaskToModel);
});
