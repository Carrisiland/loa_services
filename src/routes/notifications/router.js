// vim: set ts=2 sw=2 et tw=80:

const webPush = require('web-push');
const express = require('express');
const mongoose = require('mongoose');
const PromisesAll = require('promises-all');
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
  check('subscription.endpoint').not().isEmpty(),
  check('subscription.keys.p256dh').not().isEmpty(),
  check('subscription.keys.auth').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('/notifications/register validation errors',
      ...errors.array());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const subscription = new Subscription({
    endpoint: req.body.subscription.endpoint,
    keys: { p256dh: req.body.subscription.keys.p256dh,
    auth: req.body.subscription.keys.auth }
  });

  try {
    await subscription.save();
  } catch (e) {
    console.error('/notifications/register save error', e);
    res.status(500).json({ errors: [e] });
  }

  res.sendStatus(201);
});

router.get('/sendNotification', async (req, res) => {
  const payload = 'test';
  const options = {
    TTL: 0
  };

  try {
    const subscriptions = await Subscription.find({});
    await PromisesAll.all(subscriptions.map(s => {
      console.log(s);
      return webPush.sendNotification(s, payload, options)
    }));
    res.sendStatus(201);
  } catch(e) {
    console.error('/notifications/sendNotification error', e);
    res.status(500).json({ error: e });
  }
});

module.exports = router;
