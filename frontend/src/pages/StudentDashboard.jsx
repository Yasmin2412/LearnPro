import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [progressData, setProgressData] = useState([]);
  const studentId = '665fabc123456789abcdef01'; 

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/progress/student/${studentId}`);
      setProgressData(res.data);
    } catch (err) {
      console.error('Error fetching progress:', err);
    }
  };

  const markLessonComplete = async (progressId) => {
    try {
      await axios.put(`http://localhost:5000/api/progress/${progressId}/complete-lesson`);
      alert('✅ Lesson marked complete!');
      fetchProgress(); // Refresh after update
    } catch (err) {
      console.error('Failed to update progress', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎓 Student Dashboard</h2>

      {progressData.length === 0 ? (
        <p>You are not enrolled in any course.</p>
      ) : (
        progressData.map((item) => (
          <div
            key={item._id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '8px',
            }}
          >
            <h3>{item.courseId?.title}</h3>
            <p>Lessons Completed: {item.completedLessons} / {item.totalLessons}</p>
            <p>📝 Quizzes Available: {item.courseId?.quizzes?.length || 0}</p>

            <progress value={item.completedLessons} max={item.totalLessons}></progress>
            <br />
            <button onClick={() => markLessonComplete(item._id)} style={{ marginTop: '0.5rem' }}>
              ✅ Mark Lesson Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentDashboard;
