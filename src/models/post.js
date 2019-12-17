// @ts-nocheck
// vim: set ts=2 sw=2 et tw=80:

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  dateCreated: {
    type: String,
    required: true,
    default: () => new Date().toString()
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: () => []
  }],
  upvotes: {
    type: Number,
    default: 1
  },
  downvotes: {
    type: Number,
    default: 0
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Video'
  },
  visibility: {
    type: String
  },
  description: {
    type: String,
    default: () => ""
  },
  likersDown: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: () => []
  }],
  likersUp: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: () => []
  }],
  views: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String
  }]
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
