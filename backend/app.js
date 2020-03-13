// Import required packages
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import routers
var laborerRouter = require('./src/routes/laborer.route');
var expensesRouter = require('./src/routes/expenses.route');
var weatherRouter = require('./src/routes/weather.route');
var workAssignRouter = require('./src/routes/workAssign.route');
var workDoneRouter = require('./src/routes/workDone.route');
var expenseSumRouter = require('./src/routes/expenseSum.route');
var setTargetRouter = require('./src/routes/setTarget.route');
var getTargetRouter = require('./src/routes/getTarget.route');
var divisionRouter = require('./src/routes/division.routes');
var fieldRouter = require('./src/routes/field.route');
var managerRouter = require('./src/routes/manager.route');
var clerkRouter = require('./src/routes/clerk.route');
var conductorRouter = require('./src/routes/conductor.route');
var conductor7DayRouter = require('./src/routes/conductor7Day.route');
var laborerRouter = require('./src/routes/laborer.route');
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var fieldRouter = require('./src/routes/field.route');
var conductor7DayRouter = require('./src/routes/conductor7Day.route');
var dailyWorkSummary = require('./src/routes/dailyWorkSummary.route');
var loginRouter = require('./src/routes/login.route');
var factory = require('./src/routes/factory.route');
//var expenses = require('./src/routes/expenses.route');
// *** import other routers here

// Initialize express app
var app = express();

// Setup express app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Add headers */
app.use(function (req, res, next) {
  // Website that wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods that wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers that wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Pass to next layer of middleware
  next();
});

// Setup route paths (every route should start as '/api')
app.use('/api/laborer', laborerRouter);
app.use('/api/expenses',expensesRouter);
app.use('/api/weather', weatherRouter);
app.use('/api/workAssign', workAssignRouter);
app.use('/api/workDone', workDoneRouter);
app.use('/api/expenseSum', expenseSumRouter);
app.use('/api/setTarget', setTargetRouter);
app.use('/api/getTarget', getTargetRouter);
app.use('/api/division', divisionRouter);
app.use('/api/field', fieldRouter);
app.use('/api/manager', managerRouter);
app.use('/api/clerk', clerkRouter);
app.use('/api/conductor', conductorRouter);
app.use('/conductor7Day', conductor7DayRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/conductor7Day',conductor7DayRouter);
app.use('/dailySummary',dailyWorkSummary);
app.use('/factory',factory);
//app.use('/factory',factory);


app.use('/api/field',fieldRouter);
//app.use('/api/laborer', laborerRouter);
//app.use('/api/expenses',expenses);


// *** set route paths here. keep the structure of paths. it will help to handle lots of routes easily.

// Export express application
module.exports = app;
