// vim: set ts=2 sw=2 et tw=80:

const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult, sanitize } = require('express-validator');
const router = express.Router();
const { sendNotification, VAPID_SHRKEY, VAPID_KEY } = require('../utils');
require('../../models/subscription');
const Subscription = mongoose.model('Subscription');

router.get('/vapidPublicKey', function(req, res) {
  res.send(VAPID_SHRKEY);
});

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

  try {
    const same =
      await Subscription.findOne({ endpoint: req.body.subscription.endpoint });

    if (same) {
      res.status(200).json({ success: true, alreadyRegistered: true });
      return;
    }
  } catch (e) {
    console.error('/notifications/register find same error', e);
    res.status(500).json({ errors: [e] });
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
  try {
    await sendNotification('test ciao mamma');
    res.sendStatus(201);
  } catch(e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
