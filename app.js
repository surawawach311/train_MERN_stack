const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
// Import route
const shopRouter = require('./routes/shop');
const settingRouter = require('./routes/setting');


const app = express();

//connection mongodb server
mongoose.connect('mongodb+srv://AdminBoom:3GP7GDy1hm4HuT5E@clusterbb-dvdsf.mongodb.net/backendapi?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/shop', shopRouter);
app.use('/api/setting', settingRouter);

module.exports = app;
