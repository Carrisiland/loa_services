const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const {check, validationResult} = require('express-validator');
const youtubeRegex =
  new RegExp('^(?:(?:(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=)|' +
             '(?:(?:https?:\\/\\/)?(?:www\\.)?youtu\\.be\\/))' +
             '([\\w+]{11})$', '');

const timeRegex = /^(?:(?:(1?\d):)?([0-5]?\d):)?([0-5]\d)$/;


function parseTime(timeString) {
  const match = timeRegex.exec(timeString);
  if (!match) return null;
  match.shift();
  return match.reduce((sum, e) => sum * 60 + (e ? parseInt(e) : 0), 0);
}

router.post('/', [
    check('link').matches(youtubeRegex),
    check('start').matches(timeRegex),
    check('end').matches(timeRegex),
    check('title').not().isEmpty(),
    check('title').isLength({max: 20})
  ],
  (req, res) => {


    const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
       }

    const duration = parseTime(req.body.end) - parseTime(req.body.start);
    const video = new Video({
        duration: duration,
            link: req.body.link,
            start: req.body.start,
            end: req.body.end
    });

    video.save();

    const post = new Post ({
        user: req.user,
        title: req.body.title,
        video: video,
        visibility: req.body.visibility,
        description: req.body.description
    });

    post.save()
    .then((saved) => {
      if (req.user) {
        req.user.posts.push(saved);
        req.user.save();
      }
      console.log(saved);
        res.status(200);
        res.redirect('/gallery');
        res.end();
    })
    .catch((err) => {
        res.status(400).end();
    });
});

// router.get('/');
//
// router.delete('/:postid', (req, res) => {
//
// });

module.exports = router;
