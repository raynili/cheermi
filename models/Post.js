const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // add reference - which model does the object pertain to?
    },
    post_time: { type: Date, default: Date },
    text: String,
    prayers: Number,
    liked_by: [String]
});

module.exports = mongoose.model('PostModel', postSchema);