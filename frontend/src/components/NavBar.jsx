// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1e293b',
      color: 'white'
    }}>
      <h2 style={{ margin: 0,color: 'white' }}>🎓 LearnPro</h2>

      <div>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/instructor/dashboard" style={{ marginRight: '1rem', color: 'white' }}>Instructor</Link>
        <Link to="/student/dashboard" style={{ marginRight: '1rem', color: 'white' }}>Student</Link>
        <Link to="/login" style={{ marginRight: '1rem', color: 'white' }}>Login</Link>
        <Link to="/register" style={{ color: 'white' }}>Register?</Link>
      </div>
    </nav>
  );
};

export default Navbar;
