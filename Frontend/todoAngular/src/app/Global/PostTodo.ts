import { DTOTodo } from "./DTOTodo";
import { Todo } from "./Todo";

export default async function PostTodo(todo: DTOTodo): Promise<Todo | null>{
    try{
        const response = await fetch(`http://localhost:5269/api/todo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo)
        })
        if(!response.ok) throw new Error(`HTTP ${response.status}`)
        const result: Todo = await response.json();
        return result;
    }
    catch(error){
        console.error("Failed to edit todo", error);
        return null;
    }
}