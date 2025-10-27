/**
 * FILE: task-manager-app.js
 * PURPOSE: Task management application with localStorage persistence
 *
 * EXPORTS: None (standalone application)
 * IMPORTS: None (vanilla JavaScript)
 *
 * CORE_FUNCTIONALITY:
 * - Task CRUD operations (Create, Read, Update, Delete)
 * - LocalStorage persistence for task data
 * - Dynamic DOM rendering with task list management
 * - Task completion toggling functionality
 *
 * INTEGRATION_POINTS:
 * - Used_by: index.html
 * - Uses: localStorage API for data persistence
 * - External_deps: None
 * - Status: ACTIVE
 *
 * DATA_FLOW:
 * - Load tasks from localStorage on page load
 * - Task creation adds to tasks array and saves to localStorage
 * - Task deletion removes from array and updates localStorage
 * - Task completion toggles status and updates localStorage
 * - Re-render entire task list after any modification
 *
 * BACKEND_PATTERNS:
 * - Client-side data management with localStorage
 * - Event-driven architecture with button click handlers
 * - State management via JavaScript array manipulation
 * - DOM manipulation for dynamic UI updates
 *
 * IMPLEMENTATION_NOTES:
 * - Uses vanilla JavaScript for zero dependencies
 * - LocalStorage for simple data persistence
 * - Real-time DOM updates without page refresh
 * - No external libraries required for lightweight operation
 */

// Initialize tasks array from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// DOM elements
const taskInput = document.getElementById("task-title");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

/**
 * Render all tasks to the DOM
 */
function renderTasks() {
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = task.completed ? "task-item completed" : "task-item";
        
        const taskTitle = document.createElement("h3");
        taskTitle.textContent = task.title;
        
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "task-actions";
        
        const toggleButton = document.createElement("button");
        toggleButton.textContent = task.completed ? "Undo" : "Complete";
        toggleButton.className = task.completed ? "btn-undo" : "btn-complete";
        toggleButton.addEventListener("click", () => toggleTask(index));
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn-delete";
        deleteButton.addEventListener("click", () => deleteTask(index));
        
        buttonContainer.appendChild(toggleButton);
        buttonContainer.appendChild(deleteButton);
        
        listItem.appendChild(taskTitle);
        listItem.appendChild(buttonContainer);
        
        taskList.appendChild(listItem);
    });
}

/**
 * Add a new task
 */
function addTask() {
    const title = taskInput.value.trim();
    
    if (!title) {
        alert("Please enter a task title");
        return;
    }
    
    const newTask = {
        title: title,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks();
}

/**
 * Toggle task completion status
 */
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

/**
 * Delete a task
 */
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}

// Event listeners
addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Initial render on page load
renderTasks();

