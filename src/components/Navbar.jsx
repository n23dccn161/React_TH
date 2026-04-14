import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        EduLearn
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>
          About Us
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? 'active' : ''}>
          Research
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
          Blog
        </NavLink>
      </nav>
      <div className="auth-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </header>
  );
}

export default Navbar;