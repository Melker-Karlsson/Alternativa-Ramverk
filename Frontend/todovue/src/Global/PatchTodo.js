export default async function PatchTodo(id, todo) {
    console.log(todo);
    try{
        const response = await fetch(`http://localhost:5269/api/todo/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo)
        })
        if(!response.ok) throw new Error(`HTTP ${response.status}`)
    }
    catch(error){
        console.error("Failed to edit todo", error);
    }
}