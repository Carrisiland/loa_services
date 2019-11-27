const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const User = mongoose.model('User');

router.post('/clip/new', (req, res) => {

    const user = new User ({
        
    })
    const post = new Post ({
        user: req.body.username,
        title: req.body.title,
        video: {duration: req.body.end - req.body.start,
        source: req.body.links}
    });

    post.save()
    .then((saved) => {
        res.status(200);
        res.render('gallery.html');
    })
})