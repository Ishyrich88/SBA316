// Cache elements using getElementById and querySelector
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.querySelector('#tasks');

// Function to add a new task
function addTask(e) {
    e.preventDefault(); // Prevent form submission

    // Input validation
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    // Add event listener to toggle task completion
    li.addEventListener('click', toggleComplete);

    // Add event listener to remove task on double-click
    li.addEventListener('dblclick', removeTask);

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to toggle task completion
function toggleComplete(e) {
    e.target.classList.toggle('completed');
}

// Function to remove a task
function removeTask(e) {
    e.target.remove();
}

// Event listener for adding tasks
taskForm.addEventListener('submit', addTask);


