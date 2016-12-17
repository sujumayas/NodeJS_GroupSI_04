var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var cookieSession = require('cookie-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var mongodb = require('mongodb');
var db = require('monk')("localhost/db_historias");
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// La funcion done parsea los datos del usuario y los mete en una variable "user" en el objeto "req"
passport.serializeUser(function(user,done){  
  console.log("Serializando");
  console.log(user);
  done(null, user._id)
});

passport.deserializeUser(function(userID, done){ 
  console.log("Des-Serializando");
  //Aquí consultamos con la base de datos si el usuario existe en base de datos
  users = db.get('users');
      users
        .find({_id: userID})
        .then(function(documents){
          if(documents.length == 1){
            //console.log(documents);
            done(null, documents[0]); //Esta data se guarda en req.user  
          }else if(documents.length == 0){
            done(null, false)   //Si no encontramos usuario
          }
        }).catch(function(err){
          done(err);
        });
});

passport.use(
  new passportLocal(      
    {
      usernameField: "username",  //Passport asume que estos campos son "username" & "password".
      passwordField: "password"   //Passport asume que estos campos son "username" & "password".
    },
    function(username, password, done){
      //Do the validation here
      users = db.get('users');
      users
        .find({username: username, password : password})
        .then(function(documents){
          if(documents.length == 1){
            //console.log(documents);
            return done(null, documents[0] ); //Esta data se guarda en req.user  
          }else if(documents.length == 0){
            return done(null, false)   //Si no encontramos usuario
          }
        }).catch(function(err){
          return done(err);
        });
      
    }
  )
)

//inicialización 



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({secret: "Alorghasogjaogjwqw"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
