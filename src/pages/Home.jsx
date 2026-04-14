function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tagline">EDUCATION FOR EVERYONE</span>
          <h1>Advancing Vietnam's <span>Knowledge</span> Economy</h1>
          <p>EduLearn is dedicated to empowering learners and teachers through a flexible, high-quality digital environment. We bridge the gap between knowledge and ambition, making world-class education accessible to everyone.</p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Image+Background+Border+Shadow.png" alt="Illustration" />
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>EduLearn was founded with a simple yet powerful goal: to make world-class education accessible to every Vietnamese student, regardless of their location. Our journey began when a group of educators saw the potential of digital transformation to solve traditional learning barriers. From a small pilot project to a growing ecosystem, we've remained focused on one core belief: that high-quality education should not be a privilege. Today, we continue to innovate, bringing together the best minds in pedagogy and technology to shape the future of learning in Vietnam.</p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card blue-card">
          <h3>Our Mission</h3>
          <p>To democratize education by providing an affordable, accessible, and high-quality digital learning platform that empowers individuals to reach their full potential through lifelong learning.</p>
        </div>
        <div className="card white-card">
          <h3>Our Vision</h3>
          <p>To become the leading digital learning hub in Southeast Asia, recognized for excellence in pedagogical innovation and for creating a vibrant global community of learners and educators.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="icon">💡</div>
            <h4>Innovation</h4>
            <p>Pushing boundaries to create better tools.</p>
          </div>
          <div className="value-item">
            <div className="icon">🛡️</div>
            <h4>Quality</h4>
            <p>High-standard education for everyone.</p>
          </div>
          <div className="value-item">
            <div className="icon">🤝</div>
            <h4>Community</h4>
            <p>Fostering support and collaboration.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat"><h3>500+</h3><p>Institutional Clients</p></div>
        <div className="stat"><h3>10k+</h3><p>Active Students</p></div>
        <div className="stat"><h3>100+</h3><p>Expert Educators</p></div>
      </section>
    </>
  );
}

export default Home;