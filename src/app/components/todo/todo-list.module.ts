import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoListRoutingModule,
    MaterialModule
  ]
})
export class TodoListModule { }
