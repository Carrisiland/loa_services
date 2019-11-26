// vim: set ts=2 sw=2 et tw=80:

const LocalStrategy = require('passport-local');
const passport = require('passport');
const User = require('../models/user');
const { validationResult } = require('express-validator');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local-signup', new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, done) => {

  const val = validationResult(req);
  if (!val.isEmpty()) {
    req.flash('error', val.array().map(m => m.msg).join('<br>'));
    return done(null, false);
  }

  if (req.body.password != req.body.password2) {
    req.flash('error', 'Passwords do not match');
    return done(null, false);
  }

  process.nextTick(() => {
    User.findOne({ username }, (err, user) => {
      // if there are any errors, return the error
      if (err) {
        return done(err);
      }

      if (user) {
        req.flash('error', 'That username is already taken.');
        return done(null, false);
      } else {
        const newUser = new User();

        newUser.username = username;
        newUser.password = newUser.generateHash(password);

        newUser.save((err) => {
          if (err) {
            return done(err, null);
          } else {
            return done(null, newUser);
          }
        });
      }
    });
  });
}));

passport.use(new LocalStrategy({
  passReqToCallback: true,
}, async (req, username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      req.flash('error', 'User does not exist');
      return done(null, false);
    } else if (!user.validPassword(password)) {
      req.flash('error', 'The password is wrong');
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (e) {
    console.error(e);

    return done(e, null);
  }
}));

