<script>
    import { onMount } from "svelte";
	import GetTodo from './Global/GetTodo'
	import PatchTodo from './Global/PatchTodo'
	import DeleteTodo from './Global/DeleteTodo'
	import PostTodo from './Global/PostTodo'
	import TodoCard from "./TodoCard.svelte";
	import AddTodo from "./AddTodo.svelte";

	export let todos = []

	onMount(async () => {
		todos = await GetTodo();
	})
	
	const removeTodo = (id) => {
      DeleteTodo(id);
      todos = todos.filter(todo => todo.id !== id)
    }

	const update = (todo) => {
      PatchTodo(todo.id, {
        title: todo.title,
        context: todo.context
      })
      todos = todos.map(t => t.id === todo.id? todo : t)
    }

	const add = async (todo) => {
      const newTodo = await PostTodo(todo);
      if(newTodo === null) return;
      todos = [...todos, newTodo];
    }
	
</script>

<main>
	<AddTodo addTodo={add}/>
	{#each todos as todo}
		<TodoCard {todo} onUpdate={update} onDelete={removeTodo}/>
	{/each}
</main>

<style>

</style>