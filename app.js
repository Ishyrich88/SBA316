// Cache elements using getElementById and querySelector
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.querySelector('#tasks');

// Function to add a new task
function addTask(e) {
    e.preventDefault(); // Prevent form submission

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item using createElement
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Event listener for adding tasks
taskForm.addEventListener('submit', addTask);

// Function to toggle task completion
function toggleComplete(e) {
    e.target.classList.toggle('completed');
}

// Modify the addTask function to add event listener for task completion
function addTask(e) {
    e.preventDefault();

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    // Add event listener to toggle task completion
    li.addEventListener('click', toggleComplete);

    taskList.appendChild(li);
    taskInput.value = '';
}

taskForm.addEventListener('submit', addTask);

// Function to remove a task
function removeTask(e) {
    e.target.remove();
}

// Modify the addTask function to add event listener for task removal
function addTask(e) {
    e.preventDefault();

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    li.addEventListener('click', toggleComplete);
    li.addEventListener('dblclick', removeTask); // Double-click to remove task

    taskList.appendChild(li);
    taskInput.value = '';
}

taskForm.addEventListener('submit', addTask);
