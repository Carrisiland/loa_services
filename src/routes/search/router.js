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
    const users = await User.find({username: input});
    const posts = await Post.find({title : input}).populate('video');
    const allPosts = await Post.find({}).populate('video');
    const postsWithTag = allPosts.filter(item => item.tags.includes(input));

    let found = {};
    found.users = users;
    found.posts = posts;
    found.postsWithTag = postsWithTag;
    
    console.log("found: ", found);
    res.status(200);
    res.render('searchResult.html', {posts: found.posts, users: found.users, tagPosts : found.postsWithTag })
    return;
})

router.get('/:tag', async (req, res) => {
    try {
        const tag = req.params.tag;
        let posts = await Post.find({}).populate('video');
        const postsWithTag = posts.filter(item => item.tags.includes(tag));
        
        if(postsWithTag) {
            res.status(200);
            res.render('gallery.html' , {posts: postsWithTag});
            return;
        }
    } catch(e) {
        console.error(e);
        res.flash('error', e.toString());
        res.status(500).render('gallery.html');
    }
}); 

module.exports = router;