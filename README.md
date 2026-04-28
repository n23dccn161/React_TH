# EduLearn

Ứng dụng web học tập gồm Frontend React và Backend ASP.NET Core, sử dụng MySQL làm cơ sở dữ liệu.

## Yêu cầu cài đặt

| Công cụ | Phiên bản tối thiểu | Link tải |
|---|---|---|
| Node.js | 18+ | https://nodejs.org |
| .NET SDK | 10.0 | https://dotnet.microsoft.com/download |
| MySQL Server | 8.0+ | https://dev.mysql.com/downloads/mysql |

---

## Cài đặt & Chạy

### 1. Clone project

```bash
git clone <url-repository>
cd React_TH_1
```

### 2. Cấu hình Database

**Tạo database trong MySQL:**

```sql
CREATE DATABASE edulearn_db;
```

**Cấu hình connection string:**

Copy file mẫu và điền mật khẩu MySQL của bạn:

```bash
cd backend
copy appsettings.Development.example.json appsettings.Development.json
```

Mở `backend/appsettings.Development.json` và thay `YOUR_MYSQL_PASSWORD` bằng mật khẩu MySQL thực tế:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;Database=edulearn_db;User=root;Password=<mật_khẩu_của_bạn>;"
  }
}
```

**Chạy migration để tạo bảng:**

```bash
cd backend
dotnet ef database update
```

### 3. Chạy Backend

```bash
cd backend
dotnet run
```

Backend chạy tại: `http://localhost:5249`

Swagger UI (thử API): `http://localhost:5249/swagger`

### 4. Chạy Frontend

Mở terminal mới:

```bash
cd frontend
npm install
npm run dev
```

Frontend chạy tại: `http://localhost:5173`

---

## API Endpoints

### Xác thực (`/api/auth`)

| Method | Endpoint | Mô tả |
|---|---|---|
| POST | `/api/auth/register` | Đăng ký tài khoản |
| POST | `/api/auth/login` | Đăng nhập |
| POST | `/api/auth/logout` | Đăng xuất |

**Ví dụ đăng ký:**
```json
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "123456"
}
```

### Bài viết (`/api/blogs`)

| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/api/blogs` | Lấy danh sách bài viết (hỗ trợ lọc theo `category`, `authorEmail`) |
| GET | `/api/blogs/{id}` | Lấy chi tiết bài viết |
| GET | `/api/blogs/categories` | Lấy danh sách danh mục |
| POST | `/api/blogs` | Tạo bài viết mới |
| PUT | `/api/blogs/{id}` | Cập nhật bài viết |
| DELETE | `/api/blogs/{id}` | Xóa bài viết |

---

## Cấu trúc project

```
React_TH_1/
├── frontend/              # React + Vite
│   ├── src/
│   │   ├── pages/         # Các trang (Home, Login, Register, Blog...)
│   │   └── components/    # Các component dùng chung
│   └── package.json
├── backend/               # ASP.NET Core
│   ├── Controllers/       # AuthController, BlogController
│   ├── Models/            # User, Blog
│   ├── DTOs/              # Request/Response DTOs
│   ├── Data/              # AppDbContext (EF Core)
│   ├── Migrations/        # Database migrations
│   ├── appsettings.json                    # Cấu hình mặc định (không có mật khẩu)
│   ├── appsettings.Development.json        # Cấu hình local (gitignored)
│   └── appsettings.Development.example.json  # File mẫu để copy
└── README.md
```

---

## Lưu ý

- File `backend/appsettings.Development.json` chứa thông tin kết nối database và **không được commit lên git**.
- Mỗi người chạy dự án cần tự tạo file này từ file mẫu `.example.json`.
