import { Todo } from "./Todo";

export default async function GetTodo(): Promise<Todo[]>{
    try {
        const response = await fetch("http://localhost:5269/api/todo");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch todos:", error);
        return []; // Return empty array on error
    }
}