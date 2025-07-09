import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, instructor, lessons, quizzes }) => {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate('/register');
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      padding: '1.5rem',
      minHeight: '330px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div>
        <h2 style={{ fontSize: '1.5rem', color: '#1e293b' }}>{title}</h2>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>👨‍🏫 Instructor: {instructor}</p>
        <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          🧠 Lessons: {lessons} | 📊 Quizzes: {quizzes}
        </p>
        <p style={{ marginTop: '0.8rem', color: '#64748b', fontSize: '0.95rem' }}>
          🚀 A beginner-friendly course to master the essentials and build real projects.
        </p>
      </div>

      <button
        style={{
          marginTop: '1.5rem',
          padding: '0.6rem 1rem',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'background 0.3s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}
        onClick={handleViewCourse} 
      >
        🔍 View Course
      </button>
    </div>
  );
};

export default CourseCard;
