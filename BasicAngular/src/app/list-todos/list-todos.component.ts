import { Component } from '@angular/core';


export class Todo {
  constructor(public id:number, public description: string, public done: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
      new Todo(1, "angular", false, new Date()),
    new Todo(2, "reactjs", false, new Date()),
    new Todo(3, "frontend", false, new Date())
    // {id : 1, description: "Learn to code in angular"},
    // {id : 2, description: "Learn to code in reactjs"},
    // {id : 3, description: "Learn to code in frontend"}
  ]

  todo = {
    id : 1,
    description: "Learn to code in angular"
  }

}
