import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import PostTodo from '../Global/PostTodo';
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

  onAddTodo(){
    PostTodo({
        title: this.addTodoForm.value.Title ?? '',
        context: this.addTodoForm.value.Context ?? ''      
    });
  }
}
