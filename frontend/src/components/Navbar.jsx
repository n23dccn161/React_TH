import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../api/authApi';

function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    logoutUser();
    navigate('/');
  };

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
        {user && (
          <NavLink to="/manage-blogs" className={({ isActive }) => isActive ? 'active' : ''}>
            Quản lý Blog
          </NavLink>
        )}
      </nav>
      <div className="auth-buttons">
        {user ? (
          <div className="navbar-user">
            <span className="user-email">{user.email}</span>
            <button className="btn-login" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
            <button className="btn-register" onClick={() => navigate('/register')}>Register</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
