import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnrollPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const studentId = '665fabc123456789abcdef01'; // hardcoded for now

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Failed to fetch courses', err);
    }
  };

  const handleEnroll = async () => {
    try {
      const course = courses.find(c => c._id === selectedCourse);
      if (!course) return;

      await axios.post('http://localhost:5000/api/progress/enroll', {
        studentId,
        courseId: course._id,
        totalLessons: course.lessons
      });

      alert(`✅ Enrolled in ${course.title}`);
      setSelectedCourse('');
    } catch (err) {
      console.error('Enroll failed', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 Enroll in a Course</h2>

      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">-- Select Course --</option>
        {courses.map(course => (
          <option key={course._id} value={course._id}>
            {course.title}
          </option>
        ))}
      </select>

      <button
        style={{ marginLeft: '1rem' }}
        onClick={handleEnroll}
        disabled={!selectedCourse}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default EnrollPage;
