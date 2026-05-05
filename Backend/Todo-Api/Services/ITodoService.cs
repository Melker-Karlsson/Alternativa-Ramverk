public interface ITodoService
{
    public Task<IEnumerable<DTOTodo>> GetTodoListAsync();
    public Task<DTOTodo> PostTodoAsync(DTOTodo todo);
    public Task<DTOTodo> PatchTodoAsync(int id, DTOTodo todo);
}