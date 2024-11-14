const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// POST route for user registration
router.post('/register', registerUser);
router.post('/login');

module.exports = router;
