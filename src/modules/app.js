import { Todo } from './todo_modules/todo';
import { Project } from './todo_modules/project';
import { TodoDom } from './ui/todo_dom_factory';

console.log('This app.js file');

const todo = new Todo('', '', '', '');
const project = new Project('Coding');
const dom = new TodoDom();

let todoProject = JSON.parse(window.localStorage.getItem('projects'));
if (todoProject == null) {
  todoProject = [];
}

function updateLocalStorage(array) {
  window.localStorage.setItem('projects', JSON.stringify(array));
}
