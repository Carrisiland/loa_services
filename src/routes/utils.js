// vim: set ts=2 sw=2 et tw=80:

const mongoose = require('mongoose');

function catchErrs(promise, res) {
  return promise.catch(err => error(err, res));
}

function error(err, res) {
  console.error(err);
  res.status = err instanceof mongoose.CastError ||
    err instanceof mongoose.TypeError ? 400 : 500;
  res.format({
    json: () => res.json({ error: err }),
    html: () => res.render('500.dust', { err: JSON.stringify(err, null, 2) }),
  });
  res.end();
}

function notFound(e, res) {
  if (e == null) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
    return true;
  } else return false;
}

module.exports = { error, catchErrs, notFound };


