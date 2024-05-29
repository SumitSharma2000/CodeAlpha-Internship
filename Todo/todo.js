document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const toggleModeButton = document.getElementById('toggleMode');
    const body = document.body;

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            newTaskInput.value = '';
        }
    });

    // Toggle dark/light mode
    toggleModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggleModeButton.textContent = 'Light Mode';
        } else {
            toggleModeButton.textContent = 'Dark Mode';
        }
    });
});
