let button = document.querySelector("button");
let taskList = document.querySelector("ul");
let input = document.querySelector("input");

button.addEventListener("click", () => {
  if (input.value === '') {
    return null;
  }
  let text = input.value;
  let task = createTask(text);
  task.innerHTML +=
    '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
  taskList.appendChild(task);
  input.value = '';
});
function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
taskList.addEventListener("click", (event) => {
  if (event.target.nodeName === "I") {
    event.target.parentElement.parentElement.style = "display: none";
  }
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle('done');
  }
});
