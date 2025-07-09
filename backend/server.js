const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');


// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/progress', progressRoutes);
app.use('/api/enrollments', enrollmentRoutes);
// Routes
app.use('/api/courses', courseRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/learnhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('Mongo Error', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
