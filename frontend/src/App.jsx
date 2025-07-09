import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import InstructorDashboard from './pages/InstructorDashboard';
import StudentDashboard from './pages/StudentDashboard';
import CourseDetails from './pages/CourseDetails';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import Navbar from './components/NavBar';
import EnrollPage from './pages/EnrollPage';
import Footer from './components/Footer'; 


import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/student/enroll" element={<EnrollPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
