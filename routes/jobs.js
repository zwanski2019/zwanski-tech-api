const express = require('express');
const router = express.Router();

// GET /api/jobs
router.get('/', (req, res) => {
  const { keyword, type } = req.query;
  res.json([
    {
      id: "job1",
      title: "Frontend Developer",
      company: "Zwanski Tech",
      location: "Remote",
      type: "freelance",
      description: "React developer needed",
      salaryRange: "500-1000 USD"
    }
  ]);
});

// POST /api/jobs
router.post('/', (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== 'demo-key') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { title, company, location, type, description, salaryRange, contactEmail } = req.body;
  if (!title || !company || !location || !type || !description || !contactEmail) {
    return res.status(400).json({ error: 'Missing required job fields' });
  }

  const jobId = 'JOB456';
  res.status(201).json({ jobId });
});

module.exports = router;
