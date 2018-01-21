const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const CreateNewSurvey = require('./routes/CreateNewSurvey');
const OnBoardPerson = require('./routes/OnBoardPerson');
const GetStudents = require('./routes/GetStudents');
const Appointment =  require('./routes/PostAppointment');
const GetAllAppointments = require('./routes/GetAllAppointments');
const GetAllAppointmentsStudent = require('./routes/GetAllAppointmentsStudent');
const GetQuestions = require('./routes/GetQuestions');
const PostInterviewWorker = require('./routes/PostInterviewWorker');
const GetVideoLink = require('./routes/GetVideoLink');

//Autho
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./DatabaseFiles/Worker_Account');

passport.use(new GoogleStrategy({
        clientID: '306243012801-5lkr21ont1ks3djg86cj0858ogq54q1k.apps.googleusercontent.com',
        clientSecret: 'xzxrfrf-pKxFey5Lf4GWcnCO',
        callbackURL: "http://www.example.com/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ GoogleID: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/', index);
app.use('/users', users);
app.use('/CreateNewSurvey', CreateNewSurvey);
app.use('/OnBoardPerson', OnBoardPerson);
app.use('/GetStudents', GetStudents);
app.use('/PostAppointment', Appointment);
app.use('/GetAllAppointments', GetAllAppointments);
app.use('/GetAllAppointmentsStudent', GetAllAppointmentsStudent);
app.use('/GetQuestions', GetQuestions);
app.use('/PostInterviewWorker', PostInterviewWorker);
app.use('/GetVideoLink', GetVideoLink);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
