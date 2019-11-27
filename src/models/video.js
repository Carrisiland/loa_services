const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    duration: Number,
    link: String,
    start: String,
    end: String
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;