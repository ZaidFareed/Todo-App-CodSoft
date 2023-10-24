document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button class="deleteButton">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteButton = taskItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });
    }

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
