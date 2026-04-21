using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.DTOs;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/blogs")]
    public class BlogsController(AppDbContext db) : ControllerBase
    {
        // GET /api/blogs?category=EdTech
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] string? category)
        {
            var query = db.Blogs.AsQueryable();

            if (!string.IsNullOrEmpty(category))
                query = query.Where(b => b.Category == category);

            var result = await query.Select(b => new BlogResponseDto
            {
                Id        = b.Id,
                Title     = b.Title,
                Content   = b.Content,
                Category  = b.Category,
                CreatedAt = b.CreatedAt
            }).ToListAsync();

            return Ok(result);
        }

        // GET /api/blogs/categories
        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await db.Blogs
                .Select(b => b.Category)
                .Distinct()
                .ToListAsync();

            return Ok(categories);
        }

        // GET /api/blogs/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var blog = await db.Blogs.FindAsync(id);
            if (blog == null)
                return NotFound("Không tìm thấy bài viết");

            return Ok(new BlogResponseDto
            {
                Id        = blog.Id,
                Title     = blog.Title,
                Content   = blog.Content,
                Category  = blog.Category,
                CreatedAt = blog.CreatedAt
            });
        }

        // POST /api/blogs
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] BlogRequestDto dto)
        {
            var blog = new Blog
            {
                Id       = 0, // EF Core tự tạo
                Title    = dto.Title,
                Content  = dto.Content,
                Category = dto.Category
            };

            db.Blogs.Add(blog);
            await db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = blog.Id }, new BlogResponseDto
            {
                Id        = blog.Id,
                Title     = blog.Title,
                Content   = blog.Content,
                Category  = blog.Category,
                CreatedAt = blog.CreatedAt
            });
        }

        // PUT /api/blogs/1
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] BlogRequestDto dto)
        {
            var blog = await db.Blogs.FindAsync(id);
            if (blog == null)
                return NotFound("Không tìm thấy bài viết");

            blog.Title    = dto.Title;
            blog.Content  = dto.Content;
            blog.Category = dto.Category;

            await db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE /api/blogs/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var blog = await db.Blogs.FindAsync(id);
            if (blog == null)
                return NotFound("Không tìm thấy bài viết");

            db.Blogs.Remove(blog);
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}
