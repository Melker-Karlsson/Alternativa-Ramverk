using Microsoft.AspNetCore.Mvc;

public class TodoController : ControllerBase
{
    public async Task<ActionResult> GetTodoList()
    {
        return Ok();
    }

    public async Task<ActionResult> SetTodoObject(DTOTodo todo)
    {
        return Ok();
    }

    public async Task<ActionResult> EditTodoObject(int id, DTOTodo todo)
    {
        return Ok();
    }
}