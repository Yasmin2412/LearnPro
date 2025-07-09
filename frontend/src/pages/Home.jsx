import React from 'react';
import CourseCard from '../components/CoruseCard'; // Make sure spelling is correct

const Home = () => {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#1e293b', marginBottom: '0.5rem' }}>
          Welcome to <span style={{ color: '#4f46e5' }}>LearnHub</span> 📘
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
          Explore top courses. Track progress. Learn smart.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'stretch',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <CourseCard title="React Basics" instructor="John" lessons={8} quizzes={2} />
        <CourseCard title="MongoDB Mastery" instructor="Sarah" lessons={10} quizzes={3} />
        <CourseCard title="Node.js Essentials" instructor="Mike" lessons={6} quizzes={1} />
        <CourseCard title="Full Stack Development" instructor="David" lessons={12} quizzes={3} />
        <CourseCard title="JavaScript Fundamentals" instructor="Emma" lessons={5} quizzes={2} />
        <CourseCard title="Data Science" instructor="Olivia" lessons={4} quizzes={1} /> 
        
      </div>
    </div>
  );
};

export default Home;
