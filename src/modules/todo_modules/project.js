export class Project {
  constructor(name) {
    this._name = name;
    this.todoArray = [];
    console.log('This Project file');
  }

  get projectName() {
    return this._name;
  }

  addTodo(todo) {
    todoArray.push(todo);
  }

  allTodoEntry() {
    return todoArray;
  }
}
