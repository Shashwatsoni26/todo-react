import createTask from "./createTask.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector(".bottom ul");
const spanClasses = ["fa-pencil", "fa-trash", "fa-check"];

form.onsubmit = (e) => {
  e.preventDefault();
  const taskLi = document.createElement("li");
  const iconsWrapper = document.createElement("div");

  taskLi.innerHTML = input.value;
  createTask(iconsWrapper, 3, spanClasses);
  taskLi.appendChild(iconsWrapper);
  ul.appendChild(taskLi);
  clearInput();
};

function clearInput() {
  input.value = '';
  input.focus();
}


ul.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains('fa-pencil')) {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
      const taskText = e.target.parentElement.parentElement.previousSibling;
      taskText.textContent = newText;
    }
  }

  if (e.target.classList.contains('fa-check')) {
    const taskText = e.target.parentElement.parentElement.parentElement;
    taskText.classList.toggle('completed');
  }
});
