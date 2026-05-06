import { Component, effect, input, signal } from '@angular/core';
import type { Todo } from '../Global/Todo'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import PatchTodo from '../Global/PatchTodo';

@Component({
  selector: 'app-todo-card',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',
})
export class TodoCard {
  todoInfo = input<Todo>();
  editing = signal<boolean>(false);

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

  onSubmitApplyEdits(){
    PatchTodo(this.todoInfo()!.id, {
      title: this.todoForm.value.Title ?? '',
      context: this.todoForm.value.Context ?? ''
    })

    this.togleEditing();
  }
  
}


