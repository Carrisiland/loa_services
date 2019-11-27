const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');

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
