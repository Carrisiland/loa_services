const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
const User = mongoose.model("User");
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Comment = mongoose.model('Comment');
const { check, validationResult, sanitize } = require('express-validator');
const fetch = require('node-fetch');


router.get('/', (req, res)=>{
    let input = req.query.searchBar;
    console.log("input:", input);
    User.find({username: input}).then((found) => {
        console.log(found)
            if (found.length == 1) {
                res.status(200);
                res.render('searchResult.html' , {users: found});
                console.log("CISOXS")
                res.end();
            }
        }).catch((err) => {
        res.status(500).redirect('/post/gallery');
    });
})


module.exports = router;