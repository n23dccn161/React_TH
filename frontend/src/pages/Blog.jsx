function Blog() {
  const posts = [
    {
      id: 1,
      category: 'EdTech',
      title: '5 Ways AI Is Changing the Classroom in 2025',
      excerpt: 'From intelligent tutoring systems to real-time feedback tools, artificial intelligence is reshaping how students learn and teachers instruct.',
      date: 'March 15, 2025',
      author: 'Nguyen Thi Lan',
      readTime: '5 min read',
    },
    {
      id: 2,
      category: 'Study Tips',
      title: 'How to Build a Sustainable Online Learning Habit',
      excerpt: 'Consistency is the key to mastering any skill. Here are research-backed strategies to help you stay on track with your learning goals.',
      date: 'February 28, 2025',
      author: 'Le Thi Hoa',
      readTime: '4 min read',
    },
    {
      id: 3,
      category: 'Research',
      title: 'Understanding Learning Analytics: A Beginner\'s Guide',
      excerpt: 'Learning analytics transforms raw data into actionable insights. We break down how educators and institutions can leverage this technology.',
      date: 'February 10, 2025',
      author: 'Pham Quoc Bao',
      readTime: '6 min read',
    },
    {
      id: 4,
      category: 'Community',
      title: 'EduLearn Reaches 10,000 Students — A Community Story',
      excerpt: 'We sat down with some of our most dedicated learners to find out what keeps them coming back and how EduLearn has impacted their lives.',
      date: 'January 20, 2025',
      author: 'Tran Minh Duc',
      readTime: '3 min read',
    },
    {
      id: 5,
      category: 'EdTech',
      title: 'Gamification in Education: Does It Actually Work?',
      excerpt: 'Points, badges, leaderboards — gamification is everywhere in edtech. But does the evidence support the hype? We take a closer look.',
      date: 'January 5, 2025',
      author: 'Le Thi Hoa',
      readTime: '7 min read',
    },
    {
      id: 6,
      category: 'Study Tips',
      title: 'The Science of Spaced Repetition and Why You Should Use It',
      excerpt: 'Cramming might feel productive, but spaced repetition is how real long-term retention works. Here\'s the science explained simply.',
      date: 'December 18, 2024',
      author: 'Pham Quoc Bao',
      readTime: '5 min read',
    },
  ];

  const categories = ['All', 'EdTech', 'Study Tips', 'Research', 'Community'];

  return (
    <div className="page-container">
      {/* Page Hero */}
      <section className="page-hero">
        <h1>EduLearn <span>Blog</span></h1>
        <p>Insights, research, and stories from our team of educators and technologists.</p>
      </section>

      {/* Category Filter */}
      <section className="blog-section">
        <div className="blog-categories">
          {categories.map((cat) => (
            <button key={cat} className={`category-btn ${cat === 'All' ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {posts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-card-body">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-meta">
                  <span className="blog-author">✍️ {post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;