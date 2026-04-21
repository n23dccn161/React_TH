import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from '../api/blogApi';

const CATEGORIES = ['EdTech', 'Study Tips', 'Research', 'Community'];
const EMPTY_FORM = { title: '', content: '', category: 'EdTech' };

function ManageBlogs() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    try {
      // Chỉ lấy bài viết của người dùng hiện tại
      const res = await getAllBlogs('', user.email);
      setBlogs(res.data);
    } catch {
      setError('Không thể tải danh sách bài viết.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchBlogs();
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNew = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setFormError('');
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEdit = (blog) => {
    setForm({ title: blog.title, content: blog.content, category: blog.category });
    setEditingId(blog.id);
    setFormError('');
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setShowForm(false);
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);
    try {
      if (editingId !== null) {
        await updateBlog(editingId, form, user.email);
      } else {
        await createBlog({ ...form, authorEmail: user.email });
      }
      handleCancel();
      await fetchBlogs();
    } catch (err) {
      setFormError(err.response?.data || 'Lưu bài viết thất bại. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Xóa bài viết "${title}"?`)) return;
    try {
      await deleteBlog(id, user.email);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      setError(err.response?.data || 'Xóa bài viết thất bại.');
    }
  };

  return (
    <div className="page-container">
      <section className="page-hero">
        <h1>Quản lý <span>Blog</span></h1>
        <p>Bài viết của bạn — chỉ bạn mới có thể chỉnh sửa hoặc xóa chúng.</p>
      </section>

      <section className="manage-section">
        {showForm ? (
          <div className="blog-form-card">
            <h3>{editingId !== null ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h3>
            <form className="blog-form" onSubmit={handleSubmit}>
              {formError && <div className="auth-error">{formError}</div>}

              <div className="form-group">
                <label>Tiêu đề</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Nhập tiêu đề bài viết"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Danh mục</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-select"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Nội dung</label>
                <textarea
                  name="content"
                  placeholder="Nhập nội dung bài viết..."
                  value={form.content}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="form-textarea"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-auth-submit" disabled={submitting}>
                  {submitting ? 'Đang lưu...' : (editingId !== null ? 'Lưu thay đổi' : 'Đăng bài')}
                </button>
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Hủy
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="manage-header">
            <button className="btn-auth-submit" onClick={handleNew}>+ Tạo bài viết mới</button>
          </div>
        )}

        {error && <p className="blog-status blog-error">{error}</p>}

        {loading ? (
          <p className="blog-status">Đang tải...</p>
        ) : blogs.length === 0 ? (
          <p className="blog-status">Bạn chưa có bài viết nào. Hãy tạo bài viết đầu tiên!</p>
        ) : (
          <div className="blog-table-wrapper">
            <table className="blog-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tiêu đề</th>
                  <th>Danh mục</th>
                  <th>Ngày đăng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={blog.id}>
                    <td>{index + 1}</td>
                    <td className="blog-table-title">{blog.title}</td>
                    <td><span className="blog-category">{blog.category}</span></td>
                    <td>{new Date(blog.createdAt).toLocaleDateString('vi-VN')}</td>
                    <td className="blog-table-actions">
                      <button className="btn-edit" onClick={() => handleEdit(blog)}>Sửa</button>
                      <button className="btn-danger" onClick={() => handleDelete(blog.id, blog.title)}>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default ManageBlogs;
