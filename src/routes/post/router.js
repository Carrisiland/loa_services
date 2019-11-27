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
// [
//     check('link').not().matches(youtubeRegex),
//     check('start').matches(timeRegex),
//     check('end').matches(timeRegex),
//     check('title').not().isEmpty(),
//     check('title').isLength({max: 20})
//   ]
 // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).json({ errors: errors.array() });
    // }
router.post('/', (req, res) => {
    const video = new Video({
        duration: Number(req.body.end) - Number(req.body.start),
            link: req.body.link,
            start: req.body.start,
            end: req.body.end
    });
    //start and end are saved as strings so they have to be converted to Date? number?
    console.log("duration: ", video.duration);
    
    video.save();

    const post = new Post ({
        user: req.user,
        title: req.body.title,
        video: video,
        visibility: req.body.visibility,
        description: req.body.description
    });

    post.statics.validateSignup = function() {
        return [
            check('link').not().matches(youtubeRegex),
            check('start').matches(timeRegex),
            check('end').matches(timeRegex),
            check('title').not().isEmpty(),
            check('title').isLength({max: 20})
        ];
    };
    console.log("user: ", post.user);
    
    post.save()
    .then((saved) => {
        console.log("saved!");
        
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

module.exports = router;