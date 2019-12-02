/** @module root/router */
'use strict';
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

router.get('/', (req, res) => {
  res.render('index.html');
});



// router.get('/feed', (req, res) => {
//   res.render('feed.html');
// });

      
    



/** router for /root */
module.exports = router;
