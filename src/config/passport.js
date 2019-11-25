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
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the
                          // callback
}, (req, email, password, done) => {
  process.nextTick(() => {
    User.findOne({ email }, (err, user) => {
      // if there are any errors, return the error
      if (err) {
        return done(err);
      }

      if (user) {
        return done(null, false, req.flash('error',
          'That email is already taken.'));
      } else {
        const newUser = new User();

        newUser.email = email;
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
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the
                          // callback
}, async (req, email, password, done) => {
  try {
    const user = await User.findOne({ email });

      console.log('a');
    if (!user) {
      console.log('b');
      return done(null, false, req.flash('error', 'No user found.'));
    } else if (!user.validPassword(password)) {
      console.log('c');
      return done(null, false, req.flash('error', 'Wrong password.'));
    } else {
      console.log('d');
      return done(null, user);
    }
  } catch (e) {
    console.error(e);

    return done(e, null);
  }
}));

