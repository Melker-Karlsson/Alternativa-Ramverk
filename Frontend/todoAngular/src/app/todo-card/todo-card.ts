import { Component, input } from '@angular/core';
import type { Todo } from '../Global/Todo'

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',
})
export class TodoCard {
  todoInfo = input<Todo>();
}
