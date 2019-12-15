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

if (!process.env.PUBLISH_MODE === "true") {
  router.get('/signup', (req, res) => {
    res.render('auth/signup.html');
  });
} else {
  router.get('/signup', (req, res) => {
    res.status(403).end('Registration disabled');
  });
};

router.get('/profile', authenticated, (req, res) => {
  res.redirect('/profile/' + req.user.id);
});

if (process.env.PUBLISH_MODE !== "true") {
  router.post('/signup', User.validateSignup(),
    passport.authenticate('local-signup', {
      successRedirect: '/auth/profile',
      failureRedirect: '/auth/signup',
      failureFlash: true
    }));
} else {
  router.post('/signup', (req, res) => {
    res.status(403).end('Registration disabled');
  });
};

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
