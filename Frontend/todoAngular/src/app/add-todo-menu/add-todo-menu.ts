import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import PostTodo from '../Global/PostTodo';
import todoService from '../todoService';

@Component({
  selector: 'app-add-todo-menu',
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo-menu.html',
  styleUrl: './add-todo-menu.css',
})
export class AddTodoMenu {
  addTodoForm = new FormGroup({
    Title: new FormControl(''),
    Context: new FormControl(''),
  });

  todoService = inject(todoService)
}
