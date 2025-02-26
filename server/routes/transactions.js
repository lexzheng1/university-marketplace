// File: server/routes/transactions.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Placeholder route - we'll implement this fully later
router.get('/', auth, async (req, res) => {
  res.json([]);
});

module.exports = router;