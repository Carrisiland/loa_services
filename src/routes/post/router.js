const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/post');
require('../models/user');
const Post = mongoose.model('Post');
const User = mongoose.model('User');

router.post('/', (req, res) => {

    if(!req.body || !req.body.title || !req.body.start || !req.body.end || !req.body.link)
    const user = new User ({
        username: req.body.username,
    });
    const post = new Post ({
        id: req.body.id,
        user: user,
        title: req.body.title,
        video: {
            duration: req.body.end - req.body.start,
            source: req.body.links
        },
        visibility: req.body.visibility
    });

    //add event listener to the upload button
    post.save()
    .then((saved) => {
        res.status(200);
        res.render('gallery.html');
        res.end();
    })
    .catch((err) => {
        res.status(400).end();
    });
});

router.get('/')