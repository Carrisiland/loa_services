// vim: set ts=2 sw=2 et tw=80:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Comment = mongoose.model('Comment');
const fetch = require('node-fetch');

router.post('/comment/up/:id' , (req, res) => {
  Comment.findById(req.params.id).then((comment) => {
    comment.upvotes +=1;
    return comment.save();
  }).then((saved) => {
    res.status(200);
    res.end();
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});



router.post('/comment/down/:id' , (req, res) => {
  Comment.findById(req.params.id).then((comment) => {
    comment.downvotes +=1;
    return comment.save();
  }).then((saved) => {
    res.status(200);
    res.end();
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});

router.post('/post/up/:id' , (req, res) => {
  const id = req.params.id;
  Post.findById(req.params.id).then((post) => {
    post.upvotes +=1;
    return post.save();
  }).then((saved) => {
    res.status(200);
    res.redirect('/post/' + id);
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});

router.post('/post/down/:id' , (req, res) => {
  const id = req.params.id;
  Post.findById(req.params.id).then((post) => {
    post.downvotes +=1;
    return post.save();
  }).then((saved) => {
    res.status(200);
    res.redirect('/post/' + id);
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});





module.exports = router;
