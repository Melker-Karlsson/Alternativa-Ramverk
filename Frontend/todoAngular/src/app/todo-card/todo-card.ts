import { Component, input, signal } from '@angular/core';
import type { Todo } from '../Global/Todo'

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',
})
export class TodoCard {
  todoInfo = input<Todo>();
  editing = signal<boolean>(false);
  togleEditing() {
    this.editing.set(!this.editing());
  }
  
}


