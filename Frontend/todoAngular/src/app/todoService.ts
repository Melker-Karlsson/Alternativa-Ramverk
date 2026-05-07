import {Injectable, OnInit, signal} from '@angular/core';
import { Todo } from './Global/Todo';
import GetTodo from './Global/GetTodo';
import DeleteTodo from './Global/DeleteTodo';
import PatchTodo from './Global/PatchTodo';
import { DTOTodo } from './Global/DTOTodo';
import PostTodo from './Global/PostTodo';

@Injectable({
  providedIn: 'root',
})

export default class todoService{
    todos = signal<Todo[]>([]);

    constructor(){
        this.loadTodos();
    }

    async loadTodos(){
        this.todos.set(await GetTodo());
        console.log(this.todos());
    }

    //Actions for todos
    delete(id: number){
        DeleteTodo(id);
        this.todos.update(todos => 
            todos.filter(todo => todo.id !== id)
        )
    }

    update(todo: Todo){
        PatchTodo(todo.id, {
            title: todo.title,
            context: todo.context
        })
        this.todos.update(todos => 
            todos.map(t => t.id === todo.id? todo : t)
        )
    }

    async add(todo: DTOTodo){
        const newTodo = await PostTodo(todo);
        if(newTodo === null) return;
        this.todos.update(todos => [...todos, newTodo])
    }
}