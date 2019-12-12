// vim: set ts=2 sw=2 et tw=80:
const webPush = require('web-push');
const mongoose = require('mongoose');
const PromisesAll = require('promises-all');
require('../models/subscription');
const Subscription = mongoose.model('Subscription');

const VAPID_PUBLIC_KEY = 'BKaOrp9mnKVDGtPvsobCWJ2-KhNiZfZ9UdaedsjW9FzFgvl9Xpm21CY4ogbxS_-fU2-cqhiiMYt0ZTgjeO3W5I4';
const VAPID_PRIVATE_KEY = 'YZraPi0vHmn9Rtp4YGFIdRbJLToWdKE-xe7MUPxswrA';

console.log(VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
  'https://github.com/Carrisiland/vimtok',
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

function authenticated(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    return next();
  }
}

async function sendNotification(req, payload, criteria = {}) {
  payload.userId = req.user._id;
  console.log(payload);
  const options = { TTL: 0 };

  try {
    const subscriptions = await Subscription.find(criteria);
    if (subscriptions.length > 0) {
      await PromisesAll.all(subscriptions.map(s => {
        console.log('sending notification to', s);
        return webPush.sendNotification(s, JSON.stringify(payload), options)
          .catch(async e => {
            const json = JSON.parse(e.body);
            console.log('cannot send, deleting', s._id, json);
            await Subscription.deleteOne({ _id: s._id });
          });
      }));
    }
    return true;
  } catch(e) {
    console.error('sendNotification error', e);
    return e;
  }
};

module.exports = { authenticated, sendNotification,
  VAPID_SHRKEY: VAPID_PUBLIC_KEY, VAPID_KEY: VAPID_PRIVATE_KEY };
