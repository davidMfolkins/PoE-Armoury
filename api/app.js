

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');
const indexRouter = require('./routes/index');
const userRoutes = require('./routes/users')


var app = express();

const { Pool } = require('pg');

const db = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: process.argv[2],
  password: 'vagrant',
  port: 5432,
})

console.log('Connected to database', process.argv[2])

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}));

const userRouter = express.Router();


app.use('/', indexRouter(db));
app.use('/users', userRoutes(db, userRouter));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
