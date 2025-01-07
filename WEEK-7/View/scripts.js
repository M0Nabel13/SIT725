document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task.name;
            listItem.addEventListener('click', () => showPopup(task, index));
            taskList.appendChild(listItem);
        });
    };

    const addTask = () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, details: '' });
            taskInput.value = '';
            renderTasks();
        }
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        closePopup();
        renderTasks();
    };

    const saveTaskDetails = (index, updatedName, updatedDetails) => {
        tasks[index].name = updatedName;
        tasks[index].details = updatedDetails;
        closePopup();
        renderTasks();
    };

    const showPopup = (task, index) => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const popup = document.createElement('div');
        popup.classList.add('popup');

        const taskTitleInput = document.createElement('input');
        taskTitleInput.value = task.name;
        taskTitleInput.placeholder = 'Task Name';
        popup.appendChild(taskTitleInput);

        const taskDetailsInput = document.createElement('textarea');
        taskDetailsInput.value = task.details;
        taskDetailsInput.placeholder = 'Task Details';
        taskDetailsInput.style.width = '100%';
        taskDetailsInput.style.height = '100px';
        taskDetailsInput.style.marginTop = '10px';
        taskDetailsInput.style.padding = '10px';
        popup.appendChild(taskDetailsInput);

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.classList.add('close-btn');
        saveBtn.style.backgroundColor = '#2ecc71';
        saveBtn.addEventListener('click', () =>
            saveTaskDetails(index, taskTitleInput.value, taskDetailsInput.value)
        );
        popup.appendChild(saveBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('close-btn');
        deleteBtn.style.marginTop = '10px';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        popup.appendChild(deleteBtn);

        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    };

    const closePopup = () => {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            document.body.removeChild(overlay);
        }
    };

    addTaskBtn.addEventListener('click', addTask);
    renderTasks();

    const socket = io();
    socket.on('number', (num) => {
        console.log(num);
    });
});
