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
    const users = await User.find({username: new RegExp(input, "i")});
    const posts = await Post.find({title :  new RegExp(input, "i") , visibility : "public" }).populate('video').populate("user");
    const allPosts = await Post.find({tags: new RegExp(input, "i"), visibility : "public"}).populate('video').populate("user");
    let found = {};
    found.users = users;
    found.posts = posts;
    found.postsWithTag = allPosts;
    console.log("found =", found)
    res.status(200);
    res.render('searchResult.html', {posts: found.posts, users: found.users, tagPosts : found.postsWithTag })
    return;
})

router.get('/:tag', async (req, res) => {
    try {
        const tag = req.params.tag;
        const postsWithTag = await Post.find({tags: new RegExp(tag, "i"), visibility : "public"}).populate('video').populate("user");
        // const postsWithTag = posts.filter(item => item.tags.includes(tag));
        
        if(postsWithTag) {
            res.status(200);
            res.render('searchResult.html' , {tagPosts: postsWithTag});
            return;
        }
    } catch(e) {
        console.error(e);
        res.flash('error', e.toString());
        res.status(500).render('gallery.html');
    }
}); 

module.exports = router;