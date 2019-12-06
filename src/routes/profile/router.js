const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');
const Post = mongoose.model('Post');


router.get('/public', (req, res) => {

  User.findById({id: req.user.id}).populate('posts').populate('video')
  .then((user) => {
    let ps = user.posts.filter((post) => {
      return post.visibility == "public";
    });
    res.render('profile/profile.html', {profileUser: req.user, posts: ps});
  }).catch(err => {
    console.error(err);
    req.flash('error', err.toString());
    res.render('profile/profile.html');
  });
});

router.get('/private', (req, res) => {
  User.findById({id: req.user.id}).populate('posts').populate('video')
  .then((user) => {
    let ps = user.posts.filter((post) => {
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
