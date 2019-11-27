const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    duration: Number,
    source: String
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;