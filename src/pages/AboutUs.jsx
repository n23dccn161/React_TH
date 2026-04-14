function AboutUs() {
  const team = [
    { name: 'Dr. Nguyen Thi Lan', role: 'Co-Founder & CEO', desc: 'PhD in Education Technology from NUS. 15+ years in edtech leadership.' },
    { name: 'Tran Minh Duc', role: 'Co-Founder & CTO', desc: 'Former lead engineer at VNG. Passionate about building scalable learning platforms.' },
    { name: 'Le Thi Hoa', role: 'Head of Curriculum', desc: 'Curriculum expert with experience designing programs for 50,000+ students.' },
    { name: 'Pham Quoc Bao', role: 'Head of Research', desc: 'Researcher in AI-assisted learning and adaptive education systems.' },
  ];

  const milestones = [
    { year: '2020', event: 'EduLearn founded in Ho Chi Minh City with a team of 5.' },
    { year: '2021', event: 'Launched first online course platform with 200 initial students.' },
    { year: '2022', event: 'Partnered with 50+ universities across Vietnam.' },
    { year: '2023', event: 'Reached 5,000 active learners and expanded to Southeast Asia.' },
    { year: '2024', event: 'Introduced AI-powered personalized learning paths.' },
    { year: '2025', event: 'Surpassed 10,000 students and 500 institutional clients.' },
  ];

  return (
    <div className="page-container">
      {/* Page Hero */}
      <section className="page-hero">
        <h1>About <span>EduLearn</span></h1>
        <p>We are a team of educators, engineers, and dreamers committed to transforming how Vietnam learns.</p>
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

      {/* Timeline */}
      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {milestones.map((m) => (
            <div className="timeline-item" key={m.year}>
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-event">{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h4>{member.name}</h4>
              <span className="team-role">{member.role}</span>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="stat"><h3>500+</h3><p>Institutional Clients</p></div>
        <div className="stat"><h3>10k+</h3><p>Active Students</p></div>
        <div className="stat"><h3>100+</h3><p>Expert Educators</p></div>
      </section>
    </div>
  );
}

export default AboutUs;