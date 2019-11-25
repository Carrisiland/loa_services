// vim: set ts=2 sw=2 et tw=80:

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },

  dateCreated: { type: Date, required: true, default: Date.now }
});

const Favorite = mongoose.model('Favorite', schema);
