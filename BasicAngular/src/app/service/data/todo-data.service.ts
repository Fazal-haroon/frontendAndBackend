import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";
import {API_JPA_URL, API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:any){
    return this.http.get<Todo[]>(API_JPA_URL+ `/users/${username}/todos`)
  }

  deleteTodo(username:any, id:number){
    return this.http.delete(API_JPA_URL+`/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(API_JPA_URL+`/users/${username}/todos/${id}`)
  }

  updateTodo(username: any, id: number, todo: Todo){
    return this.http.put(API_JPA_URL+`/users/${username}/todos/${id}`, todo);
  }
  createTodo(username: any, todo: Todo){
    return this.http.post(API_JPA_URL+`/users/${username}/todos`, todo);
  }

}
