using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.DTOs;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController(AppDbContext db) : ControllerBase
    {
        // POST /api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (await db.Users.AnyAsync(u => u.Email == dto.Email))
                return BadRequest("Email đã được sử dụng");

            var user = new User
            {
                Id           = 0, // EF Core tự tạo
                Email        = dto.Email,
                PasswordHash = dto.Password // TODO: hash password
            };

            db.Users.Add(user);
            await db.SaveChangesAsync();

            return Ok("Đăng ký thành công");
        }

        // POST /api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var user = await db.Users.FirstOrDefaultAsync(u =>
                u.Email == dto.Email && u.PasswordHash == dto.Password);

            if (user == null)
                return Unauthorized("Email hoặc mật khẩu không đúng");

            return Ok(new LoginResponseDto
            {
                Token = "fake-token-" + user.Id, // TODO: JWT
                Email = user.Email
            });
        }

        // POST /api/auth/logout
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            // JWT thì logout xử lý ở Frontend (xóa token)
            return Ok("Đăng xuất thành công");
        }
    }
}
