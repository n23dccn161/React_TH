namespace backend.Models
{
    public class Blog
    {
        public required int Id { get; set; }
        public required string Title { get; set; }
        public required string Content { get; set; }
        public required string Category { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string? AuthorEmail { get; set; }
    }
}