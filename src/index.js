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

console.log(todoProject.length);

const dom = new DOMFactory();

const btnProject = document.getElementById("add-new-project");
const projectList = document.getElementById("project-list");
const todoEntry = document.getElementById("todo-entries");
const newProject = document.getElementById("new-project");
const projectForm = document.getElementById("project-form");
const todoBtn = document.getElementById('todo-task');
const createTodo = document.getElementById('create-todo');

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
    updateLocalStorage(todoProject);
    projectList.appendChild(newProjectElement);
    projectForm.style.display = "none";
  }
  console.log(todoProject.length);
  console.log(getCurrentProject())
}

const getCurrentProject = (project = todoProject.length - 1) => {
  if (todoProject.length < 1) {
    return null;
  }
    return todoProject[project];
}

const getProjectIndex = (elem) => {
  let project = null
  if (elem === undefined) {
    project = getCurrentProject();
  }else {
   project = todoProject[parseInt(elem.getAttribute('data-index'), 10)]
  }
  return project;
}

function displayTodo(elem) {
  if (elem !== null || elem !== undefined) {
    todoEntry.textContent = getProjectIndex(elem).todoArray;
    console.log(getProjectIndex(elem).todoArray);
  }else {
    todoEntry.textContent = getProjectIndex().todoArray;
    console.log(getProjectIndex().todoArray);
  }
}

function displayProject(){
  console.log('display project ' + todoProject.length)
  console.log(todoProject)
  todoProject.forEach((project, index) => {
    const projectElem = document.createElement("div");
    projectElem.setAttribute('data-index', index);
    projectElem.textContent = project.name;
    projectList.appendChild(projectElem);
  })
  displayTodo();
}

function toggleForm(formElem) {
  console.log("create button is clicked");
  if (formElem.style.display == "block") {
    formElem.style.display = "none";
  } else {
    formElem.style.display = "block";
  }
}

const getProjectTodoList = () => getCurrentProject().todoArray;

const addTodo = (projectIndex) => {
  const todo = new Todo("Shopping", "Buy Clothes", "Low", "13-02-2020");
  if (projectIndex == undefined) {
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

createTodo.addEventListener('click', () => {
  addTodo();
});

projectList.addEventListener("click", e => {
  displayTodo(e.target);
});

document.addEventListener('DOMContentLoaded', () => {
  displayProject();
});
