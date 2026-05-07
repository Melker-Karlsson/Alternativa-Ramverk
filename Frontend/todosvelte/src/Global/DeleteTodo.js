export default async function DeleteTodo(id){
    try{
        const response = await fetch(`http://localhost:5269/api/todo/${id}`, {
            method: "DELETE",
        })
        if(!response.ok) throw new Error(`HTTP ${response.status}`)
    }
    catch(error){
        console.error("Failed to edit todo", error);
    }
}