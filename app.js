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


