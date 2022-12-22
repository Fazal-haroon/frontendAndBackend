import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    id: number = -1;
    todo: Todo = new Todo(this.id, '', false, new Date())


    constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id']
        if (this.id != -1) {
            this.todoService.retrieveTodo('fazal', this.id).subscribe(
                data => {
                    this.todo = data
                    console.log(this.todo)
                }
            )
        }
    }

    saveTodo() {
        if (this.id == -1 || this.id == 0) {
            this.todoService.createTodo("fazal", this.todo).subscribe(
                data => {
                    console.log("createTodo : " + data)
                    this.router.navigate(['todos'])
                }
            )
        } else {
            this.todoService.updateTodo("fazal", this.id, this.todo).subscribe(
                data => {
                    console.log("updateTodo : " + data)
                    this.router.navigate(['todos'])
                }
            )
        }
    }
}
