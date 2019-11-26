/** @module root/router */
'use strict';
// vim: set ts=2 sw=2 et tw=80:

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.redirect('/auth/profile');
  } else {
    res.render('index.html');
  }
});

router.get('/gallery', (req, res) => {
  res.render('gallery.html');
});

router.get('/videoPlayer', (req, res) => {
  res.render('videoPlayer.html');
});

router.get('/feed', (req, res) => {
  res.render('feed.html');
});

router.get('/newVideoForm', (req, res) => {
  res.render('newVideoForm.html');
});

router.get('/profile/:id', (req, res) => {
  res.render('profile.html');
});
/** router for /root */
module.exports = router;
