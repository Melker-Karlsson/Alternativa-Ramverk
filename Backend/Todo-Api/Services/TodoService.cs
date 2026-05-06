public class TodoService : ITodoService
{
    private ITodoRepository _todoRepository;

    public TodoService(ITodoRepository todoRepository)
    {
        _todoRepository = todoRepository;
    }

    public async Task DeleteTodo(int id)
    {
        await _todoRepository.DeleteTodo(id);
    }

    public async Task<IEnumerable<Todo>> GetTodoListAsync()
    {
        return await _todoRepository.GetTodoListAsync();
    }

    public async Task<DTOTodo> PatchTodoAsync(int id, DTOTodo todo)
    {
        return await _todoRepository.PatchTodoAsync(id, todo);
    }

    public async Task<DTOTodo> PostTodoAsync(DTOTodo todo)
    {
        return await _todoRepository.PostTodoAsync(todo);
    }
}