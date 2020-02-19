export class Todo {
  constructor(title, description, priority, dueDate, status = false){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    console.log('This Todo file');
  }

  getStatus(){
    return this.status;
  }

  setStatus(){
    return (this.status == false) ? true : false;
  }
}
