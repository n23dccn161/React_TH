import { useState, useEffect } from 'react';
import { getAllBlogs } from '../api/blogApi';

const CATEGORIES = ['All', 'EdTech', 'Study Tips', 'Research', 'Community'];

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function truncate(text, maxLength = 150) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trimEnd() + '...';
}

function Blog() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError('');
      try {
        const category = activeCategory === 'All' ? '' : activeCategory;
        const res = await getAllBlogs(category);
        setPosts(res.data);
      } catch {
        setError('Không thể tải bài viết. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  return (
    <div className="page-container">
      <section className="page-hero">
        <h1>EduLearn <span>Blog</span></h1>
        <p>Insights, research, and stories from our team of educators and technologists.</p>
      </section>

      <section className="blog-section">
        <div className="blog-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${cat === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && <p className="blog-status">Đang tải bài viết...</p>}
        {error && <p className="blog-status blog-error">{error}</p>}

        {!loading && !error && posts.length === 0 && (
          <p className="blog-status">Chưa có bài viết nào trong danh mục này.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <h3>{post.title}</h3>
                  <p>{truncate(post.content)}</p>
                </div>
                <div className="blog-card-footer">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.createdAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Blog;
