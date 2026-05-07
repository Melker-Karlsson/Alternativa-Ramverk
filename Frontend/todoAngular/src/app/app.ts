import { Component, OnInit, signal, inject } from '@angular/core';
import { TodoCard } from './todo-card/todo-card';
import { Todo } from './Global/Todo';
import GetTodo from './Global/GetTodo';
import { AddTodoMenu } from './add-todo-menu/add-todo-menu';
import todoService from './todoService';

@Component({
  selector: 'app-root',
  imports: [TodoCard, AddTodoMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{
  todoService = inject(todoService);
}
