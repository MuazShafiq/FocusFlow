const express = require('express');
const router = express.Router();

router.get('/api/data', (req, res) => {
  // Handle data retrieval logic here
  res.json({ message: 'Data from the backend!' });
});

module.exports = router;