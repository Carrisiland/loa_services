// vim: set ts=2 sw=2 et tw=80:

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  title: { type: String, required: true },
  dateCreated: { type: Date, required: true, default: Date.now },
  comments: [{type: String}],
  upvotes: {type: Number, default: 1},
  downvotes: {type: Number, default: 0},
  video: {
    duration: Number,
    source: String
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
