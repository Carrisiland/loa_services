// @ts-nocheck
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  title: { type: String, required: true },
  dateCreated: { type: String, required: true, default: new Date().toString()},
  posts: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}],
  postNumbers: {type: Number}
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;