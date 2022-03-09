// Create a router
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();

const { getPosts, addPost, deletePost, likePost } = require('../controllers/posts');

const { protect } = require('../middleware/authMiddleware');

router
    .route('/')
    .get(getPosts)
    .post(addPost);

router 
    .route('/:id')
    .delete(protect, deletePost)
    .patch(likePost);

module.exports = router;

