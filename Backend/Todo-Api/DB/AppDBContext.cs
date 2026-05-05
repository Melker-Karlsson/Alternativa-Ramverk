using Microsoft.EntityFrameworkCore;

public class AppDBContext : DbContext
{
    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
    {
        this.Database.EnsureCreated();
    }

    //DbSet
    public DbSet<Todo> todos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Todo>().HasData(
            new Todo
            {
                Id = 1,
                Title = "Get Milk",
                context = "Drive to the store and buy some milk"
            }
        );
    }
}