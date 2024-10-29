const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", showTasks);

// Add event listener for the "Add" button
addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create the "x" button to delete the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Clear the input box after adding the task
        inputBox.value = "";

        saveTasks();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle the checked class to show tick
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        // Remove the task if the "x" button is clicked
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || '';
}
