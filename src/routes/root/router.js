/** @module root/router */
'use strict';
// vim: set ts=2 sw=2 et tw=80:

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/videoPlayer', (req, res) => {
  res.render('videoPlayer.html');
});

router.get('/feed', (req, res) => {
  res.render('feed.html');
});

/** router for /root */
module.exports = router;
