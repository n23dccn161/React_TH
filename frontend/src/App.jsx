import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Research from './pages/Research';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageBlogs from './pages/ManageBlogs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="landing-page">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/manage-blogs" element={<ManageBlogs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
