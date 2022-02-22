// Create a router
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController');

// Set up routes for authenticating users
router.post('/', registerUser) // when hit /, go to controller function
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router;
