import { Component, signal } from '@angular/core';
import { TodoCard } from './todo-card/todo-card';
import { Todo } from './Global/Todo';

@Component({
  selector: 'app-root',
  imports: [TodoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedTodo: Todo = {
    Title: "test",
    Context: "test",
    id: 1
  }
}
