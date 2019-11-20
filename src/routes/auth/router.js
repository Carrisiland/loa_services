// vim: set ts=2 sw=2 et tw=80:
'use strict';

const express = require('express');
const router = express.Router();

// show the login form
router.get('/login', function(req, res) {

  // render the page and pass in any flash data if it exists
  res.render('auth/login.html', { message: req.flash('loginMessage') });
});

// process the login form
router.post('/login', function(req, res) {

  //do all our passport stuff here
  res.status(451).end();
});

// show the signup form
router.get('/signup', function(req, res) {

  // render the page and pass in any flash data if it exists
  res.render('auth/signup.html', { message: req.flash('signupMessage') });
});

// process the signup form
router.post('/signup', function(req, res) {

  //do all our passport stuff here);
  res.status(451).end();
});

// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.html', {
    user : req.user // get the user out of session and pass to template
  });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // if they aren't logged in redirect them to the home page
    res.redirect('/auth/login');
  }
}

module.exports = router;
