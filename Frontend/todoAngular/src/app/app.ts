import { Component, OnInit, signal } from '@angular/core';
import { TodoCard } from './todo-card/todo-card';
import { Todo } from './Global/Todo';
import GetTodo from './Global/GetTodo';

@Component({
  selector: 'app-root',
  imports: [TodoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  todos = signal<Todo[]>([]);

  async ngOnInit(){
    this.todos.set(await GetTodo());
    console.log(this.todos());
  }
}
