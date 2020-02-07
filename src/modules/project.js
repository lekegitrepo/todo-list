class Project {
  constructor(name) {
    this._name = name;
    this.todoArray = [];
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
