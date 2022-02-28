// Create a router
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

// Set up routes for authenticating users
router.post('/', registerUser) // when hit /, go to controller function
router.post('/login', loginUser)
router.get('/me', protect, getMe) // run middleware function protect before getMe function

module.exports = router;
