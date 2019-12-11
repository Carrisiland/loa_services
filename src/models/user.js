// @ts-nocheck
// vim: set ts=2 sw=2 et tw=80:

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const { check } = require('express-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  facebook: {
    id: String,
    token: String,
    name: String,
    email: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  followers: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
  following: [{type: Schema.Types.ObjectId, ref: 'User', default: []}],
  posts: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}],
  likedPosts: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}],
  image: String
});

userSchema.statics.validateSignup = function() {
  return [
    check('username', 'The username should be 3 to 50 alphanumeric characters')
      .isAlphanumeric()
      .isLength({ min: 3, max: 50 }),
    check('password', 'The password should be 8 to 50 alphanumeric characters')
      .isAlphanumeric()
      .isLength({ min: 8, max: 50 }),
    check('email', 'The email should be a valid email')
      .isLength({ max: 100 })
      .isEmail(),
  ];
};

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
const User = mongoose.model('User', userSchema);
module.exports = User;
