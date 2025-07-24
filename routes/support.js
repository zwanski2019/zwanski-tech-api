const express = require('express');
const router = express.Router();

// POST /api/support/tickets
router.post('/tickets', (req, res) => {
  const { subject, description, contactEmail, deviceType } = req.body;
  if (!subject || !description || !contactEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const ticketId = 'TICKET123';
  res.status(201).json({ ticketId, message: 'Support ticket created' });
});

// GET /api/support/tickets/:ticketId
router.get('/tickets/:ticketId', (req, res) => {
  const { ticketId } = req.params;
  res.json({
    ticketId,
    status: "open",
    lastUpdate: new Date().toISOString(),
    assignedTo: null
  });
});

module.exports = router;
