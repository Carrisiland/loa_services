const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');

const { check, validationResult } = require('express-validator');
const youtubeRegex =
  new RegExp('^(?:(?:(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=)|' +
             '(?:(?:https?:\\/\\/)?(?:www\\.)?youtu\\.be\\/))' +
             '([\\w+]{11})$', '');

const timeRegex = /^(?:(?:(1?\d):)?([0-5]?\d):)?([0-5]\d)$/;


// router.post('/', (req, res) => {
//     console.log("cioaiaoiaoa");
// })

router.post('/', (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).json({ errors: errors.array() });
    // }

    const video = new Video({
        duration: Number(req.body.end) - Number(req.body.start),
            link: req.body.link,
            start: req.body.start,
            end: req.body.end
    });
    console.log("duration: ", video.duration);
    console.log("link: ", video.link);
    console.log("start: ", video.start);
    
    //this is not saved for some reason
    video.save()
    .catch((err) => {
        res.status(400).end();
    });
    
    const post = new Post ({
        user: req.user,
        title: req.body.title,
        video: video,
        visibility: req.body.visibility,
        description: req.body.description
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

// router.get('/');

router.delete('/:postid', (req, res) => {

});

module.exports = router;