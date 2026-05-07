import { Component, effect, input, signal, inject } from '@angular/core';
import type { Todo } from '../Global/Todo'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import PatchTodo from '../Global/PatchTodo';
import DeleteTodo from '../Global/DeleteTodo';
import todoService from '../todoService';

@Component({
  selector: 'app-todo-card',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',
})
export class TodoCard {
  todoInfo = input<Todo>();
  editing = signal<boolean>(false);

  todoService = inject(todoService)

  todoForm = new FormGroup({
    Title: new FormControl(''),
    Context: new FormControl(''),
  });

  constructor() {
    effect(() => {
      const todo = this.todoInfo();
      if (todo) {
        this.todoForm.setValue({
          Title: this.todoInfo()?.title ?? '',
          Context: this.todoInfo()?.context ?? '',
        });
      }
    });
  }

  togleEditing() {
    this.editing.set(!this.editing());
  }
}


