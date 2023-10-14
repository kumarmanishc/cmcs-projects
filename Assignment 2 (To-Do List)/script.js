// Initialize an empty array to store tasks
const Tasks = [];

function addTask() {
    // Get the task input
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new task object
        const task = {
            text: taskText,
            completed: false
        };

        // Add the task to the array
        Tasks.push(task);

        // Clear the input field
        taskInput.value = "";

        // Refresh the task list
        displayTasks();
    }
}

function toggleTask(index) {
    // Toggle the completed status of a task
    Tasks[index].completed = !Tasks[index].completed;
    displayTasks();
}

function removeCompletedTasks() {
    // Filter out completed tasks
    const incompleteTasks = tasks.filter(task => !task.completed);
    Tasks.length = 0;
    Tasks.push(...incompleteTasks);
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    // Loop through the tasks and display them
    Tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        // Create a checkbox for each task
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));

        // Create a label for the task
        const label = document.createElement("label");
        label.textContent = task.text;
        label.style.textDecoration = task.completed ? "line-through" : "none";

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        // Add the task to the task list
        taskList.appendChild(listItem);
    });
}

// Attach a function to remove completed tasks
document.getElementById("taskList").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    removeCompletedTasks();
    return false;
});
