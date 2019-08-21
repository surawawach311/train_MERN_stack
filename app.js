const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config/index');
const passport = require('passport');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');


//Library MongoDB
const mongoose = require('mongoose');
// Import route
const shopRouter = require('./routes/shop');
const settingRouter = require('./routes/setting');
const userRouter = require('./routes/user');

// Import errorHander middleware
const passportJWT = require('./middlewares/passportJWT')
const errorHander = require('./middlewares/errorHandler');
const app = express();

app.use(helmet())
app.use(cors())

app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 10 * 1000,
    max: 5
});
app.use(limiter);
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

//use and init password
app.use(passport.initialize());

app.use('/api/shop', shopRouter);
app.use('/api/setting', passportJWT.isLogin, settingRouter);
app.use('/api/user', userRouter);


app.use(errorHander);

module.exports = app;
