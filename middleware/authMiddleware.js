const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const res = require('express/lib/response');

const protect = asyncHandler(async(req, res, next) => {
    let token;

    // check with headers, in http headers have an authorization object
    // will be formatted with: Bearer <token>
    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // decodes it to get the payload

            // Get user from token, token has user id as a payload, and exclude selecting password
            req.user = await User.findById(decoded.id).select('-password');
            // middleware modifies the req and passing it onto the route you want to access (getMe) 
            // so now can access req.user from any route that is protected

            next(); // call the next piece of middleware            

        } catch (err) {
            console.log(err);
            res.status(401);
            throw new Error('Not authorized');
        }
    } 

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

})

module.exports = { protect }