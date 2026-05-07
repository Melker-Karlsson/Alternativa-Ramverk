<template>
  <div id="app">
    <!-- Todo app content will go here -->
  </div>
</template>

<script>
import GetTodo from './Global/GetTodo';
import PostTodo from './Global/PostTodo';
import PatchTodo from './Global/PatchTodo';
import DeleteTodo from './Global/DeleteTodo';

export default {
  name: 'App',

  components: {

  },

  data(){
    return{
      todos: []
    }
  },

  methods: {
    async loadTodos(){
      this.todos = await GetTodo();
      console.log(this.todos);
    },

    delete(id){
      DeleteTodo(id);
      this.todos.update(todos => 
          todos.filter(todo => todo.id !== id)
      )
    },

    update(todo){
      PatchTodo(todo.id, {
        title: todo.title,
        context: todo.context
      })
      this.todos.update(todos => 
        todos.map(t => t.id === todo.id? todo : t)
      )
    },

    async add(todo){
      const newTodo = await PostTodo(todo);
      if(newTodo === null) return;
      this.todos.update(todos => [...todos, newTodo])
    }
  },

  created(){
    this.loadTodos();
  },
}
</script>

<style>

</style>
