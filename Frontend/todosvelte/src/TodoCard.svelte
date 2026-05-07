<script>
	export let editing = false;
    export let todo;
    export let onUpdate 
    export let onDelete 

    export let editTitle = todo.title
    export let editContext = todo.context

    const togleEditing = () => {
        editing = !editing;
    }

    const onEdit = () => {
        onUpdate({
            id: todo.id,
            title: editTitle,
            context: editContext
        })
        togleEditing()
    }

    const onDeleteTodo = () => {
        onDelete(todo.id);
    }
</script>

<main>
    {#if !editing}
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.context}</p>
            <button on:click={togleEditing}>Edit</button>
            <button on:click={onDeleteTodo}>Delete</button>
        </div>
    
    {:else}
        <form on:submit={onEdit}>
            <label>
                title
                <input type="text" bind:value={editTitle}>
            </label>
            <label>
                context
                <input type="text" bind:value={editContext}>
            </label>
            <button type="submit">Submit</button>
        </form>
    {/if}
</main>

<style>

</style>