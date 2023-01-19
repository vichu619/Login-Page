var createError = require('http-errors'); //generate errors
var express = require('express');
var path = require('path');//used for working with file paths and directories
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/* The app.use() function is used to mount the specified middleware function 
(are the functions that have access to the request object and response object, 
  or we can call it a response-request cycle) at the path which is being specified.
   The middleware function is executed when the base of the requested path matches the path.*/

/*This function tells the server what to do when get requests at a given route.*/ 

app.use((req,res,next)=>{
  res.header('Cache-Control','private,no-cache,no-store,must-revalidate');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"ak24244",resave:true,saveUninitialized:true,cookie:{maxAge:6000000}}));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ?   err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
