// vim: set ts=2 sw=2 et tw=80:

const mongoose = require('mongoose');

const subscriptionSchema = mongoose.Schema({
  endpoint: String,
  keys: {
    auth: String,
    p256dh: String
  }
});

const subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = subscription;
