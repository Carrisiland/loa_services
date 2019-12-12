// vim: set ts=2 sw=2 et tw=80:

const webPush = require('web-push');
const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult, sanitize } = require('express-validator');
const router = express.Router();
require('../../models/subscription');
const Subscription = mongoose.model('Subscription');

const VAPID_PUBLIC_KEY = 'BKaOrp9mnKVDGtPvsobCWJ2-KhNiZfZ9UdaedsjW9FzFgvl9Xpm21CY4ogbxS_-fU2-cqhiiMYt0ZTgjeO3W5I4';
const VAPID_PRIVATE_KEY = 'YZraPi0vHmn9Rtp4YGFIdRbJLToWdKE-xe7MUPxswrA';

// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
  'https://github.com/Carrisiland/vimtok',
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

router.get('/vapidPublicKey', function(req, res) {
  res.send(VAPID_PUBLIC_KEY);
});

// Object to store to reach client (sort of a socket handle)
let subscription = null;

router.post('/register', [
  check('endpoint').not().isEmpty(),
  check('keys.auth').not().isEmpty().
  check('keys.p256dh').not().isEmpty()
], async (req, res) => {
  subscription = req.body.subscription;
  res.sendStatus(201);
});

router.get('/sendNotification', function(req, res) {
  const payload = 'test';
  const options = {
    TTL: 0
  };

  console.log(subscription);

  // send to client previously stored in subscription
  webPush.sendNotification(subscription, payload, options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
