const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: String,
    post_time: { type: Date, default: Date.now() },
    text: String,
    prayers: Number
});

const postModel = mongoose.model('PostModel', postSchema);

module.exports = postModel;