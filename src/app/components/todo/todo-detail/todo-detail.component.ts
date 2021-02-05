import { TodoService } from './../../todos/services/todo.service';
import { Todo } from './../../../shared/models/todo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  public todoId: string;
  public todoDetail = <Todo>{};
  public mode: string;
  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService ) { }



  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
      if (this.todoId !== undefined) {
            console.log(this.todoId);
            this.getTodoDetailById(this.todoId);
            this.mode = 'Edit';
      } else {
            // this.todoId = null;
            console.log(this.todoId);
            this.todoDetail['id'] = 0;
            this.mode = 'Add';
      }
    });
  }

  getTodoDetailById(id) {
    this.todoDetail = this.todoService.getTodoById(parseInt(id));
    console.log(this.todoDetail);
  }

  onTodoSubmitForm(form) {
    console.log(form);
    if(form.valid) {
        this.todoService.updateTodoById(this.todoDetail);
        this.router.navigate(['/todo-list']);
    } else {

    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }


}
