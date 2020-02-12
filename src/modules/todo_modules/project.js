export class Project {
  constructor(name) {
    this.name = name;
    this.todoArray = [];
    console.log('This Project file');
  }

  getName() {
    return this.name;
  }

  addTodo(todo) {
    todoArray.push(todo);
  }

  allTodoEntry() {
    return todoArray;
  }
}
