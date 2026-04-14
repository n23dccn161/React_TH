function Research() {
  const areas = [
    {
      icon: '🤖',
      title: 'AI in Education',
      desc: 'Investigating adaptive learning systems that personalize content delivery based on individual learner behavior and performance patterns.',
    },
    {
      icon: '📊',
      title: 'Learning Analytics',
      desc: 'Using data science to identify learning gaps, predict student outcomes, and improve instructional design at scale.',
    },
    {
      icon: '🧠',
      title: 'Cognitive Science',
      desc: 'Applying insights from neuroscience and psychology to design curricula that align with how the human brain learns most effectively.',
    },
    {
      icon: '🌐',
      title: 'EdTech Accessibility',
      desc: 'Researching methods to make digital education accessible to underserved communities, including rural and low-bandwidth environments.',
    },
  ];

  const publications = [
    {
      title: 'Adaptive Learning Paths in Vietnamese Secondary Education',
      authors: 'Pham Q.B., Le T.H., Nguyen T.L.',
      journal: 'Journal of Educational Technology, Vol. 12, 2024',
    },
    {
      title: 'Predicting Dropout Risk with Clickstream Analytics',
      authors: 'Tran M.D., Pham Q.B.',
      journal: 'International Conference on Learning Analytics, 2023',
    },
    {
      title: 'Bridging the Urban-Rural EdTech Gap in Southeast Asia',
      authors: 'Nguyen T.L., Le T.H.',
      journal: 'Asia-Pacific Education Review, Vol. 8, 2023',
    },
  ];

  return (
    <div className="page-container">
      {/* Page Hero */}
      <section className="page-hero">
        <h1>Our <span>Research</span></h1>
        <p>EduLearn invests in research that shapes the future of education — from AI-powered tools to evidence-based pedagogy.</p>
      </section>

      {/* Research Areas */}
      <section className="research-areas">
        <h2>Research Areas</h2>
        <div className="research-grid">
          {areas.map((area) => (
            <div className="research-card" key={area.title}>
              <div className="icon">{area.icon}</div>
              <h4>{area.title}</h4>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="publications-section">
        <h2>Recent Publications</h2>
        <div className="publications-list">
          {publications.map((pub) => (
            <div className="publication-item" key={pub.title}>
              <h4>{pub.title}</h4>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-journal">{pub.journal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="research-cta">
        <h2>Collaborate with Us</h2>
        <p>We welcome partnerships with universities, think tanks, and organizations committed to advancing education research.</p>
        <button className="btn-primary">Get in Touch</button>
      </section>
    </div>
  );
}

export default Research;