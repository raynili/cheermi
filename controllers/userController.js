const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs/dist/bcrypt');

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // check if User exists
    const userExists = await User.findOne({ email });

    if ( userExists ){
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10); // generate a salt needed to hash password
    const hashedPassword = await bcrypt.hash(password, salt);


    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
// Check email and password against the database
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) { // use bcrypt method to compare plain text password with hashed password
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials');
    }

})

// @desc Get own user data
// @route POST /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    // any route where you use the token in, you have access to req.user which was set in middleware

    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT token
const generateToken = (id) => {
    // put the id in the payload
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}