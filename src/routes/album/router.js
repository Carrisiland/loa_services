const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
require('../../models/album');
const User = mongoose.model("User");
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Album = mongoose.model('Album');
const Comment = mongoose.model('Comment');
const { check, validationResult, sanitize } = require('express-validator');
const fetch = require('node-fetch');

router.post('/', async (req, res)=>{
    let album = new Album({
        user: req.user,
        title: req.body.title,
        visibility: req.body.visibility,
        posts:[],
        postNumbers:0
    })

    const saved = await album.save();

    if (req.user) {
        req.user.albums.push(saved);
        await req.user.save();
      }
      res.redirect('/post/gallery');
})




module.exports = router;