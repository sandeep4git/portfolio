var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs =require("fs");
var routes = require('./routes/index');
var users = require('./routes/users');
//var router = express.Router();
var nodemailer = require('nodemailer');
var transporter =nodemailer.createTransport();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


app.post('/contact-form',function(req,res){
  console.log("Hello from the contact form");
 var transporter = nodemailer.createTransport({

    service:'Gmail',
     auth:{
        user:'sandeeptcphotography@gmail.com',
         pass:'angularjs'
     }
 });

  var data=req.body;
    console.log(data);
  var mailOptions={

      from:data.contactEmail,
      to:'stbt4@mst.edu',
      subject:'Message from '+data.contactName,
      text:data.contactMsg,
      html:"<p>You got a website submission with the following details..</p><ul><li>Name: + data.contactName</li><li>EmailID :data.contactEmail</li></ul>"

  }
  transporter.sendMail(mailOptions,function(error,info){
      if(error){
          console.log(error);
          res.redirect('/');
      }
      else{
          console.log("Message Sent Successfully!"+info.response);

      }
      }
  )

  res.json(data);

});


console.log("Program Started");

fs.readFile('file.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());

});
console.log("Program Ended");


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
