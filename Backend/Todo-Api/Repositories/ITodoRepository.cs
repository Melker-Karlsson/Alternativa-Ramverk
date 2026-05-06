public interface ITodoRepository
{
    public Task<IEnumerable<Todo>> GetTodoListAsync();
    public Task<DTOTodo> PostTodoAsync(DTOTodo todo);
    public Task<DTOTodo> PatchTodoAsync(int id, DTOTodo todo);
}