const express = require('express');
const router = express.Router();

// GET /api/tools/imei-check?imei=123456789012345
router.get('/imei-check', (req, res) => {
  const { imei } = req.query;
  const isValid = /^\d{15}$/.test(imei);

  if (!imei || !isValid) {
    return res.status(400).json({ error: 'Invalid IMEI format' });
  }

  res.json({
    imei,
    isValid,
    status: "clean",
    model: "Galaxy S20",
    brand: "Samsung",
    countryOfOrigin: "South Korea"
  });
});

module.exports = router;
