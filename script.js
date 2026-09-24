const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

// Tryck Enter för att lägga till aktivitet 
taskInput.addEventListener("keydown", function (event)
{ if (event.key === "Enter") { addTask(); } });

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    taskItem.textContent = taskText;

    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}