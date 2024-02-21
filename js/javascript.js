let button = document.querySelector("button");
let taskList = document.querySelector("ul");
let input = document.querySelector("input");
var tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTasks();
  for (let task of tasks) {
    task = createTask(task);
    task.innerHTML +=
      '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
    taskList.appendChild(task);
  }
}
input.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    if (input.value === "") {
      return null;
    }
    let text = input.value;
    let task = createTask(text);
    task.innerHTML +=
      '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
    taskList.appendChild(task);
    input.value = "";
    saveTasks(text);
  }
});
button.addEventListener("click", () => {
  if (input.value === "") {
    return null;
  }
  let text = input.value;
  let task = createTask(text);
  task.innerHTML +=
    '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
  taskList.appendChild(task);
  input.value = "";
  saveTasks(text);
});
function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
taskList.addEventListener("click", (event) => {
  if (event.target.nodeName === "I") {
    let target = event.target.parentElement.parentElement;
    target.style = "display: none";
    tasks.splice(tasks.indexOf(target.textContent), 1);
    localStorage.setItem("todo", tasks);
  }
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("done");
  }
});
function saveTasks(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}
function getTasks() {
  return localStorage.getItem("todo").split(",");
}
