// vim: set ts=2 sw=2 et tw=80:

function authenticated(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    return next();
  }
}

module.exports = { authenticated };


