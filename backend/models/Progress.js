const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  completedLessons: { type: Number, default: 0 },
  totalLessons: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
