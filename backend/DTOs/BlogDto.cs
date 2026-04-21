namespace backend.DTOs
{
    public class BlogRequestDto
    {
        public required string Title { get; set; }
        public required string Content { get; set; }
        public required string Category { get; set; }
        public string? AuthorEmail { get; set; }
    }

    public class BlogResponseDto
    {
        public required int Id { get; set; }
        public required string Title { get; set; }
        public required string Content { get; set; }
        public required string Category { get; set; }
        public required DateTime CreatedAt { get; set; }
        public string? AuthorEmail { get; set; }
    }
}
