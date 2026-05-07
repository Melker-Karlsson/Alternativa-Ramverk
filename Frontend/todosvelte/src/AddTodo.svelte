<script>
	export let addTodo;
    export let title = ''
    export let context = ''

    const onAddTodo = () => {
        addTodo({
            title: title,
            context: context
        })
    }
    
</script>

<main>
    <form on:submit={onAddTodo}>
        <label>
            title
            <input type="text" bind:value={title}>
        </label>
        <label>
            context
            <input type="text" bind:value={context}>
        </label>
        <button type="submit">AddTodo</button>
    </form>
</main>

<style>

</style>