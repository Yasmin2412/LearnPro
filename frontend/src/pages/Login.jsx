import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password, role });

    if (role === 'student') {
      navigate('/student/dashboard');
    } else {
      navigate('/instructor/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login to <span style={{ color: '#4f46e5' }}>LearnHub</span> 📚</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#1e293b',
  },
  form: {
    display: 'grid',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
  },
  select: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Login;
