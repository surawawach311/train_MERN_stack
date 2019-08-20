const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config/index');

//Library MongoDB
const mongoose = require('mongoose');
// Import route
const shopRouter = require('./routes/shop');
const settingRouter = require('./routes/setting');
const userRouter = require('./routes/user');

// Import errorHander middleware
const errorHander =require('./middlewares/errorHandler');
const app = express();

//connection mongodb server
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/shop', shopRouter);
app.use('/api/setting', settingRouter);
app.use('/api/user', userRouter);


app.use(errorHander);

module.exports = app;
