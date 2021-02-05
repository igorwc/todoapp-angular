import { Todo } from './../../../shared/models/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    {
      id: 1,
      task: "get milk",
      who: "Scott",
      dueDate: new Date(2021,10,19),
      done: false
    },
    {
      id: 2,
      task: "get broccoli",
      who: "Elisabeth",
      dueDate: new Date(2021,5,19),
      done: false
    },
    {
      id: 3,
      task: "get garlic",
      who: "Trish",
      dueDate: new Date(2021,2,19),
      done: false
    },

    {
      id: 4,
      task: "get eggs",
      who: "Josh",
      dueDate: new Date(2021,1,19),
      done: true
    }
  ];
  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos.slice();
  }

  getTodoById(id: number): Todo {
    let todoArray = this.todos.slice();
    console.log(todoArray);
    return todoArray
      .filter(todo => todo.id === id)
      .pop();
  }

  updateTodoById(todo): Todo {
    if (todo.id === 0) {
      let todoArray = this.todos.slice();
      let todoid = todoArray.length;
      todo.id = ++todoid;
      todoArray.push(todo);
      this.todos = todoArray.slice()
    } else {
      let todoSaveArray = this.todos.slice();
      for (let i = 0; i < todoSaveArray.length; i++) {
        if (todoSaveArray[i].id === todo.id) {
          todoSaveArray[i] = todo;
          this.todos = todoSaveArray.slice()
        }
      }
    }
    return todo;
  }

  toggleTodoById(id){
    let todoSaveArray = this.todos.slice();
    for (let i = 0; i < todoSaveArray.length; i++) {
      if (todoSaveArray[i].id === id) {
        todoSaveArray[i].done = !todoSaveArray[i].done;
        this.todos = todoSaveArray.slice()
      }
    }
  }
  deleteTodoDetail(id) {

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        this.todos.splice(i, 1);
      }
    }
  };

}
