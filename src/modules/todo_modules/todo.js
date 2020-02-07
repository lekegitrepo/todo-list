export class Todo {
  constructor(title, description, dueDate, priority, status = false){
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this.status = status;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    return this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    return this._description = description;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    return this._priority = priority;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(date) {
    return this._dueDate = date;
  }

  getStatus(){
    return this.status;
  }

  setStatus(){
    return (this.status == false) ? true : false;
  }
}
