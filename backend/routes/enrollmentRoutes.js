const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

// 📌 POST /api/enrollments - Enroll a student in a course
router.post('/', async (req, res) => {
  const { studentId, courseId } = req.body;

  try {
    const existing = await Enrollment.findOne({ studentId, courseId });
    if (existing) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    const enrollment = new Enrollment({ studentId, courseId });
    await enrollment.save();

    res.status(201).json({ message: 'Enrolled successfully', enrollment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Enrollment failed' });
  }
});

// 📌 GET /api/enrollments/:studentId - Get all enrolled courses for a student
router.get('/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    const enrollments = await Enrollment.find({ studentId }).populate('courseId');
    const courses = enrollments.map(enroll => enroll.courseId);
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch enrolled courses' });
  }
});

module.exports = router;
