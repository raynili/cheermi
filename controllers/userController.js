const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// Wrap in asyncHandler to handle exceptions -> they made their own custom asyncHandler in the last vid, use that or use the same from post's controller

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    res.json({message:'Register User'})
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message:'Login User'})
})

// @desc Get user data
// @route POST /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message:'User data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}