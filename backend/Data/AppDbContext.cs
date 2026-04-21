using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options) { }

        // Mỗi DbSet = 1 bảng trong database
        public DbSet<User> Users { get; set; }
        public DbSet<Blog> Blogs { get; set; }
    }
}