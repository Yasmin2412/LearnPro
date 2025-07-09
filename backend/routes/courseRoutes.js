const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


router.post('/', async (req, res) => {
  try {
    const { title, lessons, quizzes } = req.body;

    // Validate required fields
    if (!title || lessons == null || quizzes == null) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newCourse = new Course({ title, lessons, quizzes });
    await newCourse.save();

    res.status(201).json({ message: 'Course created!', course: newCourse });
  } catch (error) {
    console.error('POST /api/courses error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    console.error('GET /api/courses error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
// GET /api/courses/:courseId/quizzes - fetch quizzes for a course
router.get('/:courseId/quizzes', async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course.quizzes); // assuming course.quizzes is an array
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

module.exports = router;
