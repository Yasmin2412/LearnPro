const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const Enrollment = require('../models/Enrollment'); // ✅ import this

// POST - Enroll in a course
router.post('/enroll', async (req, res) => {
  const { studentId, courseId, totalLessons } = req.body;

  try {
    // ✅ Check if already enrolled in Enrollment
    const alreadyEnrolled = await Enrollment.findOne({ studentId, courseId });
    if (alreadyEnrolled) {
      return res.status(400).json({ message: 'Already enrolled' });
    }

    // ✅ Save to Enrollment model
    const enrollment = new Enrollment({ studentId, courseId });
    await enrollment.save();

    // ✅ Save to Progress model
    const progress = new Progress({ studentId, courseId, totalLessons });
    await progress.save();

    res.status(201).json({ message: 'Enrollment complete', progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Enrollment failed' });
  }
});

// PUT - Update progress
router.put('/:progressId', async (req, res) => {
  const { completedLessons } = req.body;
  try {
    const progress = await Progress.findByIdAndUpdate(
      req.params.progressId,
      { completedLessons },
      { new: true }
    );
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Could not update progress' });
  }
});

// GET - Get all progress for a student
router.get('/student/:studentId', async (req, res) => {
  try {
    const progress = await Progress.find({ studentId: req.params.studentId }).populate('courseId');
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch progress' });
  }
});
// PUT /api/progress/:progressId/complete-lesson
router.put('/:progressId/complete-lesson', async (req, res) => {
  try {
    const progress = await Progress.findById(req.params.progressId);
    if (!progress) return res.status(404).json({ error: 'Progress not found' });

    if (progress.completedLessons < progress.totalLessons) {
      progress.completedLessons += 1;
      await progress.save();
    }

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update progress' });
  }
});


module.exports = router;
