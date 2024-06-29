// 1. select everything that will be required
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

// 2. user intercation
const inputHandler = function () {
    // click -> value get
    const newTask = input.value;
    if (newTask.length == 0)
        return;
    /*****addTask******/
    // element create 
    const taskElem = createTask(newTask);
    // append 
    taskList.appendChild(taskElem);
    // clear the input
    input.value = "";

    const updateBtn = taskElem.children[1];
    updateBtn.addEventListener("click", function () {
        let updatedTask = prompt("What's the updated task?")
        taskElem.children[0].textContent = updatedTask;
    })

    const deleteBtn = taskElem.children[2];
    deleteBtn.addEventListener("click", function () {
        taskElem.remove();
    })
}

function createTask(newTask) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const updateBtn = document.createElement("button");
    updateBtn.innerText = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.textContent = newTask;

    div.appendChild(li);
    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);
    return div;

}

button.addEventListener("click", inputHandler);


