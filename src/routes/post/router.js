const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/post');
require('../models/user');
const Post = mongoose.model('Post');
const { check } = require('express-validator');

router.post('/', [
    // username must be an email
    check('username').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
  ], (req, res) => {

    if(!req.body || !req.body.title || !req.body.start || !req.body.end || !req.body.link)
    const post = new Post ({
        id: req.body.id,
        user: req.user,
        title: req.body.title,
        video: {
            duration: req.body.end - req.body.start,
            source: req.body.links
        },
        visibility: req.body.visibility
    });

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

router.get('/');

router.delete('/:postid', (req, res) => {

});