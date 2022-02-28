// Bring in Post Model to access posts
const Post = require('../models/Post');
const User = require('../models/User');

// @desc      Get all transactions
// @route     GET /api/v1/transactions
// @access    Public
exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();

        // return Succeed status of API call
        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc      Add post
// @route     POST /api/v1/posts
// @access    Private
exports.addPost = async (req, res, next) => {
    try {
        const { _, post_time, text, prayers, liked_by } = req.body;

        console.log(req.user.toString());

        const post = await Post.create({
            user: req.user.id,
            name: req.user.name,
            post_time,
            text, 
            prayers, 
            liked_by});

        return res.status(201).json({
            success: true,
            data: post
        });

    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({ // 400 due to client error
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }

}

// @desc      Delete post
// @route     DELETE /api/v1/posts/:id
// @access    Private
exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        const user = await User.findById(req.user.id);

        // Check for user
        if (!user) {
            res.status(401)
            throw new Error('User not found');
        }

        // Check logged in user matches post user
        if (post.user.toString() === user.id) {      
            await post.remove(); // some methods are called on the resource in the db

            return res.status(200).json({
                success: true,
                data: {}
            });
        } else {
            res.status(401)
            throw new Error('User not authorized');
        }

    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({ // 400 due to client error
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc      Like post
// @route     PATCH /api/v1/posts/:id
// @access    Public
exports.likePost = async (req, res, next) => {
    try {
        const { user } = req.body;

        const post = await Post.findOneAndUpdate({_id: req.params.id}, {$inc: {'prayers': 1}, $addToSet: {liked_by: user}});
 
        if (!post) {
            return res.status(400).json({
                success: false,
                error: 'Post not found'
            });
        }

        return res.status(201).json({
            success: true,
            data: post
        });

    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({ // 400 due to client error
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}