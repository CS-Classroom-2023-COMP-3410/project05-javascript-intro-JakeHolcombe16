// Initialize an array to store tasks, filtering out any invalid entries
let tasks = (JSON.parse(localStorage.getItem("tasks")) || []).filter(task => task && typeof task.completed === "boolean");

// Function to render tasks
function renderTasks(filter = "all") {
  const taskList = document.querySelector("#task-list");
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.draggable = true;
    taskItem.dataset.index = index;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(index));

    const text = document.createElement("span");
    text.textContent = task.text || "Untitled Task";
    text.contentEditable = true;
    text.addEventListener("blur", () => editTask(index, text.textContent));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));

    taskItem.append(checkbox, text, deleteButton);
    taskList.appendChild(taskItem);
  });

  addDragAndDropHandlers();
  saveTasksToLocalStorage();
}

// Add a new task
function addTask(taskText) {
  tasks.push({ text: taskText, completed: false });
  renderTasks();
}

// Edit a task
function editTask(index, newText) {
  tasks[index].text = newText || "Untitled Task";
  saveTasksToLocalStorage();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event listeners for adding tasks and filtering
document.querySelector("#add-task-form").addEventListener("submit", e => {
  e.preventDefault();
  const taskInput = document.querySelector("#task-input");
  if (taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

document.querySelector("#filter-options").addEventListener("change", e => {
  renderTasks(e.target.value);
});

// Initial render
renderTasks();
