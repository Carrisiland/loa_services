// vim: set ts=2 sw=2 et tw=80:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Comment = mongoose.model('Comment');
const { check, validationResult, sanitize } = require('express-validator');
const fetch = require('node-fetch');

const youtubeRegex =
  new RegExp('^(?:(?:(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\' +
    '?v=)|(?:(?:https?:\\/\\/)?(?:www\\.)?youtu\\.be\\/))([\\w+]{11})$');

const vimeoRegex =
  new RegExp('(http|https)?:\\/\\/(www\\.)?vimeo.com\\/(?:channels\\/' +
    '(?:\\w+\\/)?|groups\\/([^\\/]*)\\/videos\\/|)(\\d+)(?:|\\/\\?)');

const timeRegex = /^(?:(?:(1?\d):)?([0-5]?\d):)?([0-5]\d)$/;

function parseTime(timeString) {
  const match = timeRegex.exec(timeString);
  if (!match) return null;
  match.shift();
  return match.reduce((sum, e) => sum * 60 + (e ? parseInt(e) : 0), 0);
}

router.get('/new', (req, res) => {
  res.render('newVideoForm.html');
});

router.get('/gallery', (req, res) => {
  Post.find({ visibility: 'public' }).populate('user').populate('video')
    .then(posts => {
      res.render('gallery.html', { posts }) })
    .catch(err => {
      res.flash('error', err.toString());
      res.status(500).render('gallery.html');
    });
});

router.post('/', [
  sanitize('link').customSanitizer((v, re) => {
    if (re = youtubeRegex.exec(v)) {
      re.videoType = 'youtube';
      return re;
    } else if (re = vimeoRegex.exec(v)) {
      re.videoType = 'vimeo';
      return re;
    } else {
      throw new Error(`${v} is not a valid Youtube/Vimeo link`);
    }
  }),
  check('start').matches(timeRegex),
  check('end').matches(timeRegex),
  check('title').not().isEmpty(),
  check('title').isLength({max: 20})
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      req.flash('error', 'Post submission not valid');
      res.render('newVideoForm.html');
      return;
    }

    const duration = parseTime(req.body.end) - parseTime(req.body.start);
    const match = req.body.link;
    const video = new Video({
      duration: duration,
      link: match[0],
      start: req.body.start,
      end: req.body.end
    });

    if (match.videoType == 'youtube') {
      video.thumbnailLink = 'http://i3.ytimg.com/vi/' + match[1] +
        '/hqdefault.jpg';
    } else {
      const info = await
        fetch(`http://vimeo.com/api/v2/video/${match.pop()}.json`)
      const infoJson = await info.json();
      video.thumbnailLink = infoJson[0].thumbnail_large;
    }

    await video.save();

    let post = new Post({
      user: req.user,
      title: req.body.title,
      video: video,
      visibility: req.body.visibility,
      description: req.body.description,
      tags: req.body.tags.split(", ")
    });
    
    if (req.user) {
      console.log(req.user);
      post.likersUp.push(req.user);
    }
    const saved = await post.save();

    if (req.user) {
      req.user.posts.push(saved);
      await req.user.save();
    }
    res.redirect('/post/gallery');
  } catch(e) {
    req.flash('error', e.toString());
    res.status(500).render('newVideoForm.html');
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Post.findById(id).populate('video').populate('user').populate({
    path: 'comments',
    populate: [{
      path: 'user',
      model: 'User'
    }],
  })
  .then(post => {
    post.views +=1;
    post.save();
    res.render('post/view.html', {post});
  });
});


router.post('/comment/:id', async (req, res) => {
  const post_id = req.params.id;

  const comment = new Comment ({
    user: req.user,
    text: req.body.reply
  })

  if (req.user) {
    comment.likersUp.push(req.user);
  }
  comment.dateCreated = comment.dateCreated.slice(4, 21);
  await comment.save();
  let post = await Post.findById(post_id);
  post.comments.push(comment);
  await post.save();
  res.redirect('/post/'+post_id);
});



router.get('/edit/:id', (req, res) => {
  Post.findById(req.params.id).populate('video')
  .then((post) => {
    res.render('editVideoForm.html', {post});
  });
});


router.patch('/edit/:id', [
  check('start').matches(timeRegex),
  check('end').matches(timeRegex),
  check('title').not().isEmpty(),
  check('title').isLength({max: 20})
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      req.flash('error', 'Post submission not valid');
      res.render('newVideoForm.html');
      return;
    }

    const duration = parseTime(req.body.end) - parseTime(req.body.start);


    const post = await Post.findById(req.params.id).populate("video").populate('user');
    if (req.user) {
      if (req.user.id != post.user.id) {
        throw new Error('You are not the owner of this post');
      }
    } else {
      throw new Error("You need to login to delete posts");
    }
    post.video.duration = duration;
    post.video.start = req.body.start;
    post.video.end = req.body.end;

    await post.video.save();

    post.title = req.body.title;
    post.visibility = req.body.visibility;
    post.description = req.body.description;
    post.tags = req.body.tags;
    await post.save();

    res.redirect('/post/gallery');
  } catch(e) {
    req.flash('error', e.toString());
    res.status(500).render('newVideoForm.html');
  }
});

router.delete('/delete/:id', (req, res) => {
  Post.findById(req.params.id).populate('user').then(async (found) => {
    let user = req.user;

    if (user) {
      if (user.id != found.user.id) {
        throw new Error('You are not the owner of this post');
      }
    } else {
      throw new Error("You need to login to delete posts");
    }

    user.posts = user.posts.filter((post) => {
      return post.id != found.id;
    });

    await user.save();
    
    return found.remove();
  }).then((removed) => {
    res.status(204).render('gallery.html');
  }).catch((err) => {
    if(err.name == "CastError") {
      res.status(404).render('/profile/profile.html');
    } else {
      res.status(500).render("/profile/profile.html");
    }
  });
});

module.exports = router;
