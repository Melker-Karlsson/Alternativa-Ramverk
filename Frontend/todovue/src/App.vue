<template>
  <div id="app">
    <AddTodo @add="add"/>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" @delete="removeTodo" @update="update"/>
  </div>
</template>

<script>
import GetTodo from './Global/GetTodo';
import PostTodo from './Global/PostTodo';
import PatchTodo from './Global/PatchTodo';
import DeleteTodo from './Global/DeleteTodo';
import TodoCard from './components/TodoCard.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: 'App',

  components: {
    TodoCard,
    AddTodo
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

    removeTodo(id){
      DeleteTodo(id);
      this.todos = this.todos.filter(todo => todo.id !== id)
    },

    update(todo){
      PatchTodo(todo.id, {
        title: todo.title,
        context: todo.context
      })
      this.todos = this.todos.map(t => t.id === todo.id? todo : t)
    },

    async add(todo){
      const newTodo = await PostTodo(todo);
      if(newTodo === null) return;
      this.todos = [...this.todos, newTodo];
    }
  },

  created(){
    this.loadTodos();
  },
}
</script>

<style>

</style>
