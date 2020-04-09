import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]
  message: String

  // [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Be best', false, new Date()),
  //   new Todo(3, 'Play pierogi', false, new Date())
  // ]

  
  todo = {
      id: 1, 
      description: 'Learn to dance'}
  

  constructor(
    private todoservice: TodoDataService
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoservice.retrieveAllTodos('marcin').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
      this.todoservice.deleteTodo('marcin', id).subscribe(
        response => {
          console.log(response)
          this.message = `Delete of Todo ${id} Successful!`
          this.refreshTodos();
        }
      )
  }

}
