const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');
const Post = mongoose.model('Post');


router.get('/public/:id', (req, res) => {
  Post.find({user: req.params.id}).populate('video').populate('user')
  .then((posts) => {
    let ps = posts.filter((post) => {
      return post.visibility == "public";
    });
    console.log(ps);
    res.render('profile/profile.html', { profileUser: req.user, posts: ps});
  }).catch(err => {
    console.error(err);
    req.flash('error', err.toString());
    res.render('profile/profile.html');
  });
});


router.get('/private/:id', (req, res) => {
  Post.find({user: req.params.id}).populate('video').populate('user')
  .then((posts) => {
    let ps = posts.filter((post) => {
      return post.visibility == "private";
    });
    res.render('profile/profile.html', { profileUser: req.user, posts: ps});
  }).catch(err => {
    console.error(err);
    req.flash('error', err.toString());
    res.render('profile/profile.html');
  });
});


router.get('/:id', (req, res) => {
  User.findById(req.params.id).populate({
    path: 'posts',
    populate: [{
      path: 'video',
      model: 'Video'
    }, {
      path: 'user',
      model: 'User',
    }]
  }).then(user => res.render('profile/profile.html',
    { profileUser: user, posts: user.posts }))
    .catch(err => {
      console.error(err);
      req.flash('error', err.toString());
      res.render('profile/profile.html');
    });
});


module.exports = router;
