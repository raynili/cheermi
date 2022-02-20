const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: String,
    post_time: { type: Date, default: Date },
    text: String,
    prayers: Number,
    liked_by: [String]
});

module.exports = mongoose.model('PostModel', postSchema);