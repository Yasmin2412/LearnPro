import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstructorDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    lessons: 0,
    quizzes: 0,
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/courses', newCourse);
      alert('🎉 Course created!');
      setCourses(prev => [res.data.course, ...prev]);
      setNewCourse({ title: '', lessons: 0, quizzes: 0 });
      setShowForm(false);
    } catch (err) {
      console.error('Error creating course:', err);
    }
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      width: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#1e293b' }}>👨‍🏫 Instructor Dashboard</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          marginTop: '1rem',
          padding: '0.6rem 1.2rem',
          fontSize: '1rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        {showForm ? '❌ Close Form' : '➕ Add New Course'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: '1.5rem',
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
            display: 'grid',
            gap: '1rem',
            maxWidth: '500px'
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="lessons"
            placeholder="Total Lessons"
            value={newCourse.lessons}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="quizzes"
            placeholder="Total Quizzes"
            value={newCourse.quizzes}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              padding: '0.7rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            ✅ Create Course
          </button>
        </form>
      )}

      <h3 style={{ marginTop: '2.5rem', color: '#1e293b' }}>📚 Your Courses</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem',
        width: '100%',
        padding: '0',
        boxSizing: 'border-box'
      }}>
        {courses.length === 0 ? (
          <p style={{ color: '#64748b' }}>No courses created yet.</p>
        ) : (
          courses.map((course) => (
            <div
              key={course._id}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#334155' }}>
                {course.title}
              </h4>
              <p style={{ color: '#475569' }}>
                🧠 Lessons: {course.lessons} | 📊 Quizzes: {course.quizzes}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '0.7rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  outline: 'none',
};

export default InstructorDashboard;
