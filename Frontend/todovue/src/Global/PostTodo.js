export default async function PostTodo(todo){
    try{
        const response = await fetch(`http://localhost:5269/api/todo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo)
        })
        if(!response.ok) throw new Error(`HTTP ${response.status}`)
        const result = await response.json();
        return result;
    }
    catch(error){
        console.error("Failed to edit todo", error);
        return null;
    }
}