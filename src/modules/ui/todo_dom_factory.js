export class TodoDom{
  constructor(){
    console.log('This TodoDom file');
  }

  renderTodoList(todoArray, elem){
    todoArray.forEach((todo) => {
     const todoList = `<details>
     <summary>${todo.title}</summary>
     <div>
       <p>Description</p>
       <p>${todo.description}</p>
     </div>
     <p>Priority: ${todo.priority}</p>
     <p>Deadline: ${todo.dueDate}</p>
     <p>Status: <input type="checkbox" id="Check"></p>
   </details>
    `
    elem.innerHTML += todoList;
    });
  }
}
