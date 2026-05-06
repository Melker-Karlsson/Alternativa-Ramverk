import { DTOTodo } from "./DTOTodo";

export default async function PostTodo(todo: DTOTodo){
    try{
        const response = await fetch(`http://localhost:5269/api/todo`, {
            method: "POST",
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