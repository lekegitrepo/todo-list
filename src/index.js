import { Todo } from "./modules/todo_modules/todo";
import { Project } from "./modules/todo_modules/project";
import { DOMFactory } from "./modules/ui/dom_factory";
import "./style/app.scss";

let todoProject = JSON.parse(window.localStorage.getItem("projects"));
if (todoProject == null) {
  todoProject = [];
}

function updateLocalStorage(array) {
  window.localStorage.setItem("projects", JSON.stringify(array));
}

const dom = new DOMFactory();

const btnProject = document.getElementById("add-new-project");
const projectList = document.getElementById("project-list");
const todoEntry = document.getElementById("todo-entries");
const newProject = document.getElementById("new-project");
const projectForm = document.getElementById("project-form");
const todoBtn = document.getElementById('todo-task');
const todoForm = document.getElementById('form-container');

const projectName = document.getElementById("project-name");

function createProject() {
  if (projectName.value != "") {
    const newProjectElement = document.createElement("div");
    newProjectElement.setAttribute('data-index', (todoProject.length - 1) + 1)
    newProjectElement.textContent = projectName.value;
    const project = new Project(projectName.value);
    console.log(project.name);
    todoProject.push(project);
    projectList.appendChild(newProjectElement);
    projectForm.style.display = "none";
  }
  console.log(todoProject.length);
  console.log(getCurrentProject())
}

function displayTodo(elem) {
  const todoList = todoProject[parseInt(elem.getAttribute('data-index'), 10)].todoArray;
  console.log(todoList);
  if (todoList !== null || todoList !== undefined) {
    todoEntry.textContent = todoList;
  }
}

function toggleForm(formElem) {
  console.log("create new project button is clicked");
  if (formElem.style.display == "block") {
    formElem.style.display = "none";
  } else {
    formElem.style.display = "block";
  }
}

const getCurrentProject = (project = todoProject.length - 1) => {
  if (todoProject.length < 1) {
    return null;
  }
    return todoProject[project];
}

const getProjectTodoList = () => getCurrentProject().todoArray;

const addTodo = (projectIndex = null) => {
  const todo = new Todo("Shopping", "Buy Clothes", "Low", "13-02-2020");
  if (projectIndex == null) {
    getCurrentProject().todoArray.push(todo);
  }else {
    getCurrentProject(projectIndex).todoArray.push(todo);
  }
}

btnProject.addEventListener("click", createProject);

newProject.addEventListener("click", () => {
  toggleForm(projectForm);
});

todoBtn.addEventListener('click', () => {
  toggleForm(todoForm)
})

projectList.addEventListener("click", e => {
  displayTodo(e.target);
});
