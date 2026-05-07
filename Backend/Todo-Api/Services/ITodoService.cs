public interface ITodoService
{
    public Task<IEnumerable<Todo>> GetTodoListAsync();
    public Task<Todo> PostTodoAsync(DTOTodo todo);
    public Task<DTOTodo> PatchTodoAsync(int id, DTOTodo todo);
    public Task DeleteTodo(int id);
}