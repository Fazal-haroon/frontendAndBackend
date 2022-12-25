import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../service/basic-authentication.service";


export class Todo {
  constructor(public id:number, public description: string, public done: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos : Todo[] = [];

  message : string = '';

  // todos = [
  //   //   new Todo(1, "angular", false, new Date()),
  //   // new Todo(2, "reactjs", false, new Date()),
  //   // new Todo(3, "frontend", false, new Date())
  //   // {id : 1, description: "Learn to code in angular"},
  //   // {id : 2, description: "Learn to code in reactjs"},
  //   // {id : 3, description: "Learn to code in frontend"}
  // ]

  constructor(private todoService:TodoDataService, private router:Router, private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
      let user = this.basicAuthenticationService.getAuthenticatedUser()
      this.todoService.retrieveAllTodos(user).subscribe(
          response => {
              console.log(response);
              this.todos = response;
          }
      )
  }


  // todo = {
  //   id : 1,
  //   description: "Learn to code in angular"
  // }

  deleteTodo(todoId: number) {
      console.log(`delete todo ${todoId}`)
      this.todoService.deleteTodo("fazal", todoId).subscribe(
          response => {
              console.log(response);
              this.message = `Delete of Todo ${todoId} Successful!`;
          }
      )
      // setTimeout(() => window.location.reload(), 15);
      this.refreshTodos();
    }

    updateTodo(id: number) {
        console.log(`update ${id}`)
        this.router.navigate(['todos', id])
    }

    addTodo() {
        this.router.navigate(['todos', -1])
    }
}
