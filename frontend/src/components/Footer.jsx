import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">EduLearn</span>
          <p>Empowering learners and teachers through a flexible, high-quality digital environment.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/research">Research</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>contact@edulearn.vn</p>
          <p>Ho Chi Minh City, Vietnam</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 EduLearn Inc. All Rights Reserved. Designed by N23DCCN161_HuynhQuocHuy</p>
      </div>
    </footer>
  );
}

export default Footer;