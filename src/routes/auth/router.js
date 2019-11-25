const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');

router.get('/login', (req, res) => {
  res.render('auth/login.html');
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username or password'
}));

router.get('/signup', (req, res) => {
  res.render('auth/signup.html');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/auth/signup',
  failureFlash: true
}));

module.exports = router;
