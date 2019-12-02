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
const { check, validationResult, sanitize } = require('express-validator');
const fetch = require('node-fetch');

router.get('/feed', (req, res) => {
    let user = req.user;
    user.populate({
      path : "following", 
      populate :[{
        path: "user",
        model: "User",
        populate :[{
          path: "posts",
          model : "Post"
        }] 
      }]
    }).then(post =>{
      res.render('feed.html', {post});
      });
    });

router.post("/follow/up/:id"), (req, res)=>{
    User.findById(req.params.id).populate("followers")
}