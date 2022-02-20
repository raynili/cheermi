// Create a router
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();

const { getPosts, addPost, deletePost, likePost } = require('../controller/posts');

//router.get('/', (req, res) => res.send('Hello'));

router
    .route('/')
    .get(getPosts)
    .post(addPost);

router 
    .route('/:id')
    .delete(deletePost)
    .patch(likePost);

module.exports = router;

