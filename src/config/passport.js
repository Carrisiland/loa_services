// vim: set ts=2 sw=2 et tw=80:


// load all the things we need
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

// expose this function to our app using module.exports
module.exports = function(passport) {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id, done));

  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override
    // with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // pass back the entire request to the callback
  }, (req, email, password, done) => {

    // asynchronous
    // User.findOne won't fire unless data is sent back
    process.nextTick(() => {

      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists

      User.findOne({ email }, (err, user) => {
        // if there are any errors, return the error
        if (err)
          return done(err);

        // check to see if theres already a user with that email
        if (user) {
          return done(null, false, req.flash('signupMessage',
            'That email is already taken.'));
        } else {

          // if there is no user with that email
          // create the user
          var newUser = new User();

          // set the user's local credentials
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);

          // save the user
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));
};

