const express = require('express');
const router = express.Router();

// GET /api/courses?category=web-dev&limit=5
router.get('/', (req, res) => {
  const { category, limit = 10 } = req.query;
  res.json([
    {
      id: "course1",
      title: "Intro to Web Development",
      description: "Learn HTML, CSS, JS",
      category: category || "web-dev",
      durationHours: 8,
      isCertified: true
    }
  ]);
});

// GET /api/courses/:courseId
router.get('/:courseId', (req, res) => {
  const { courseId } = req.params;
  res.json({
    id: courseId,
    title: "Sample Course",
    description: "Details about course",
    category: "web-dev",
    durationHours: 10,
    isCertified: true
  });
});

module.exports = router;
