const input = document.querySelector(".task-creator__input");
const addBtn = document.querySelector(".task-creator__btn");
const taskList = document.querySelector(".task__list");

function addTask() {
  const taskTitle = input.value;

  if (taskTitle.trim() === "") {
    return;
  }

  input.value = "";

  const task = document.createElement("li");
  task.className = "task";

  const title = document.createElement("span");
  title.className = "task__title";
  title.textContent = taskTitle;
  task.append(title);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "task__del-btn";
  deleteBtn.textContent = "delete";
  task.append(deleteBtn);

  if (!taskList.children.length) {
    taskList.addEventListener("click", deleteTask);
  }

  taskList.append(task);
}

function deleteTask({ target }) {
  if (target.classList.contains("task__del-btn")) {
    target.parentElement.remove();
  }
  if (!taskList.children.length) {
    taskList.removeEventListener("click", deleteTask);
  }
}

addBtn.addEventListener("click", addTask);
