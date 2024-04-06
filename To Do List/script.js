// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskText;

    // Add event listener to mark task as completed when clicked
    newTaskItem.addEventListener('click', function () {
        this.classList.toggle('completed');
    });

    // Add event listener to remove task when double clicked
    newTaskItem.addEventListener('dblclick', function () {
        this.remove();
    });

    taskList.appendChild(newTaskItem);
    taskInput.value = '';
}
