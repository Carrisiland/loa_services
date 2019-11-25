// vim: set ts=2 sw=2 et tw=80:

const LocalStrategy = require('passport-local');
const passport = require('passport');
const User = require('../models/user');

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the
  // callback
}, (req, username, password, done) => {
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

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the
  // callback
}, async (req, username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      req.flash('error', 'No user found.');
      return done(null, false);
    } else if (!user.validPassword(password)) {
      req.flash('error', 'Wrong password.');
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (e) {
    console.error(e);

    return done(e, null);
  }
}));

