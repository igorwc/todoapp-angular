import { Todo } from './../../../shared/models/todo';
import { TodoService } from './../../todos/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  displayedColumns: string[] = ['id','task', 'who', 'dueDate', 'done','actions'];
  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.loadAllTodoList();
  }
  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
  }

  onClickEditTodoDetail(id) {
    console.log(id);
    this.router.navigate(['/todo-list','detail'], { queryParams: { id: id } });
  }

  onClickAddTodo() {
    this.router.navigate(['/todo-list','detail']);
  }

  onClickTodoDelete(id) {
    this.todoService.deleteTodoDetail(id);
    this.loadAllTodoList();
  }

  toggleAction( id){
    this.todoService.toggleTodoById(id)
  }
}
