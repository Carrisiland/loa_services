const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');
const { authenticated } = require('../utils');

router.get('/login', (req, res) => {
  res.render('auth/login.html');
});

// process the login form
router.post('/login', passport.authenticate('local', {
  successRedirect: '/auth/profile',
  failureRedirect: '/auth/login',
  failureFlash: true
}));

router.get('/signup', (req, res) => {
  res.render('auth/signup.html');
});

router.get('/profile', authenticated, (req, res) => {
  res.render('auth/profile.html');
});

router.post('/signup', User.validateSignup(),
  passport.authenticate('local-signup', {
    successRedirect: '/auth/profile',
    failureRedirect: '/auth/signup',
    failureFlash: true
  }));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
