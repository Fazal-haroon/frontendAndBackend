import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    {id : 1, description: "Learn to code in angular"},
    {id : 2, description: "Learn to code in reactjs"},
    {id : 3, description: "Learn to code in frontend"}
  ]

  todo = {
    id : 1,
    description: "Learn to code in angular"
  }

}
