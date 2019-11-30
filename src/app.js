// vim: set ts=2 sw=2 et tw=80:

const debug = require('debug')('vimtok');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const nunjucks = require('nunjucks');
const session = require('express-session');
const cors = require('cors');
const flash = require('express-flash-messages');
const passport = require('passport');
const mongoose = require('mongoose');

require('./models/user.js');
require('./config/passport');

mongoose.connect('mongodb://127.0.0.1/vimtok', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();
const secret = 'luciano-malusa-in-pensione';

//configure app
app.use(logger('dev'));

const engine = nunjucks.configure('views', {
    autoescape: true,
    express: app
});
// Add debug json filter to print debug in template
engine.addFilter('json', JSON.stringify);
app.set('engine', engine);

app.use(cors());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public'));
app.use(session({ secret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Inject passport.js user in templating engine and add CORS header to response
app.use((req, res, next) => {
    const engine = res.app.get('engine');
    engine.addGlobal('user', req.user);
    res.header('Access-Control-Allow-Origin', '*');

    next();
});

// Initialize routers here
const routers = require('./routes/routers');

app.use('/', routers.root);
app.use('/auth', routers.auth);
app.use('/post', routers.post);
app.use('/profile', routers.profile);
app.use('/like', routers.like);
// app.use('/likes', routers.likes); not yet ready

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

// Socket.io code

const io = require('socket.io')(server);

let id = 1;

io.on('connection', (socket) => {
  console.log('client connected');

  socket.emit('sessionId', { id: id++ });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

const eventBus = require('./pubsub');

module.exports = app;
