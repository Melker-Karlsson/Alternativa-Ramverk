using Microsoft.AspNetCore.Mvc;

[Route("api/todo")]
[ApiController]
public class TodoController : ControllerBase
{
    ITodoService _todoService;

    public TodoController(ITodoService todoService)
    {
        _todoService = todoService;
    }

    [HttpGet]
    public async Task<ActionResult> GetTodoList()
    {
        return Ok(await _todoService.GetTodoListAsync());
    }

    [HttpPost]
    public async Task<ActionResult> PostTodoObject([FromBody] DTOTodo todo)
    {
        try
        {
            return Ok(await _todoService.PostTodoAsync(todo));
        }
        catch(Exception eror)
        {
            return BadRequest(eror.Message);
        }
    }

    [HttpPatch]
    public async Task<ActionResult> PatchTodoObject([FromBody] int id, [FromBody] DTOTodo todo)
    {
        try
        {
            return Ok(await _todoService.PatchTodoAsync(id, todo));
        }
        catch(Exception eror)
        {
            return BadRequest(eror.Message);
        }
    }
}