const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');

router.get('/login', (req, res) => {
  res.render('auth/login.html');
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/auth/login', // redirect back to the signup page if there is an
                             // error
  failureFlash: true // allow flash messages
}));

router.get('/signup', (req, res) => {
  res.render('auth/signup.html');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile', // redirect to the secure profile section
  failureRedirect: '/auth/signup', // redirect back to the signup page if there is an
                              // error
  failureFlash: true // allow flash messages
}));

module.exports = router;
