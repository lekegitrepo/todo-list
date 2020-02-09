import { Todo } from "./modules/todo_modules/todo";
import { Project } from "./modules/todo_modules/project";
import { DOMFactory } from "./modules/ui/dom_factory";
import "./style/app.scss";

console.log("Webpack is working like charm !");

let todoProject = JSON.parse(window.localStorage.getItem("projects"));
if (todoProject == null) {
  todoProject = [];
}

function updateLocalStorage(array) {
  window.localStorage.setItem("projects", JSON.stringify(array));
}

const todo = new Todo("", "", "", "");
const project = new Project("Coding");
const dom = new DOMFactory();

const btnProject = document.getElementById("add-new-project");
const projectList = document.getElementById("project-list");
const todoEntry = document.getElementById("todo-entries");

function temporaryCreateProject() {
  const newProjectElement = document.createElement("div");
  newProjectElement.textContent = "New Project";

  projectList.appendChild(newProjectElement);
}

function displayTodo(elem) {
  console.log("Todo List");
  todoEntry.textContent = elem.textContent;
}

btnProject.addEventListener("click", temporaryCreateProject);

projectList.addEventListener("click", e => {
  displayTodo(e.target);
});
