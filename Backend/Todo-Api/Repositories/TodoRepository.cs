using Microsoft.EntityFrameworkCore;

public class TodoRepository : ITodoRepository
{
    private AppDBContext _db;

    public TodoRepository(AppDBContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<DTOTodo>> GetTodoListAsync()
    {
        //reuturn Formateddata
        return await _db.todos.Select(todo => new DTOTodo
        {
           Title = todo.Title,
           context = todo.context 
        })
        .ToListAsync<DTOTodo>();
    }

    public async Task<DTOTodo> PatchTodoAsync(int id, DTOTodo todo)
    {
        //Search for todo object
        Todo? foundTodo = await _db.todos.FirstOrDefaultAsync(todo => todo.Id == id);
        
        if(foundTodo == null) throw new Exception("TodoObject was not Found");

        //Update todo object and save changes
        foundTodo.Title = todo.Title;
        foundTodo.context = todo.context;

        await _db.SaveChangesAsync();

        //return new object
        return new DTOTodo
        {
          Title = foundTodo.Title,
          context = foundTodo.context
        };
    }

    public async Task<DTOTodo> PostTodoAsync(DTOTodo todo)
    {
        //Check for empty inputs
        if(todo.Title == string.Empty) throw new Exception("Title can't be empty");
        if(todo.context == string.Empty) throw new Exception("Context can't be empty");

        //Add and save todo object
        await _db.AddAsync(todo);
        await _db.SaveChangesAsync();

        return new DTOTodo
        {
            Title = todo.Title,
            context = todo.context
        };     
    }
}