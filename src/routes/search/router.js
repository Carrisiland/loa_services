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


router.get('/', async (req, res) => {
    let input = req.query.searchBar;
    console.log("input:", input);
    let users = await User.find({username: input});
    let posts = await Post.find({title : input});
    if (users) {
        res.status(200);
        res.render('searchResult.html' , {found: users});
        // console.log("CISOXS")
        res.end();
    } else if (posts) {
        res.status(200);
        res.render('searchResult.html' , {found: users});
        // console.log("CISOXS")
        res.end();
    }
    //how do we show both users and posts?? :(

    // User.find({username: input}).then((found) => {
    //     console.log(found)
    //         if (found.length == 1) {
    //             res.status(200);
    //             res.render('searchResult.html' , {users: found});
    //             res.end();
    //         }
    //     }).catch((err) => {
    //     res.status(500).redirect('/post/gallery');
    // });
})
router.get('/:tag', async (req, res) => {
    try {
        const tag = req.params.tag;
        let posts = await Post.find({}).populate('video');
        console.log("posts: ", posts);
        const postsWithTag = posts.filter(item => item.tags.includes(tag));
        
        console.log("found: ", postsWithTag);
        if(postsWithTag) {
            res.status(200);
            console.log("rendering");
            res.render('gallery.html' , {'posts': postsWithTag});
            return;
        }
    } catch(e) {
        console.error(e);
        res.flash('error', e.toString());
        res.status(500).render('gallery.html');
    }
}); 

module.exports = router;