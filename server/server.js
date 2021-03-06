var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dotenv = require('dotenv').config()
var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session.config');

// Route includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var gameRouter = require('./routes/game.router');
var reviewRouter = require('./routes/review.router');

var port = process.env.PORT || 5000;
var api = process.env.API_key;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/game', gameRouter);
app.use('/review', reviewRouter);

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function () {
    console.log('Listening on port:', port);
});
