import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:string){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
          Authorization: basicAuthHeaderString
        }
    )
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`, {headers:header})
  }

  deleteTodo(username:string, id:number){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
          Authorization: basicAuthHeaderString
        }
    )
    return this.http.delete(`http://localhost:8081/users/${username}/todos/${id}`, {headers:header})
  }

  retrieveTodo(username: string, id: number) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
          Authorization: basicAuthHeaderString
        }
    )
    return this.http.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`, {headers:header})
  }

  updateTodo(username: string, id: number, todo: Todo){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
          Authorization: basicAuthHeaderString
        }
    )
    return this.http.put(`http://localhost:8081/users/${username}/todos/${id}`, todo, {headers:header});
  }
  createTodo(username: string, todo: Todo){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
          Authorization: basicAuthHeaderString
        }
    )
    return this.http.post(`http://localhost:8081/users/${username}/todos`, todo, {headers:header});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'user'
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeaderString;
  }

}
