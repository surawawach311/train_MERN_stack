const User = require('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('../config/index');

exports.register = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

        const errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            const error = new Error('Please Input require Infomation')
            error.statusCode = 422;
            error.validation = errorValidation.array();
            throw error;
        }
        //check Duplicate Email
        const existEmail = await User.findOne({ email: email });
        if (existEmail) {
            const error = new Error('This Email is not avaliable')
            error.statusCode = 403;
            throw error;
        }

        let user = new User();
        user.name = name;
        user.email = email;
        user.password = await user.encryptPassword(password);
        await user.save();

        return res.json(201, {
            message: 'Registered'
        })


    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            const error = new Error('Email Not Found');
            error.statusCode = 401;
            throw error;
        }

        const validPassword = await user.validPassword(password);
        if (!validPassword) {
            const error = new Error('Password or Email Incorrect');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: '5 days' });

        const expires_in = jwt.decode(token);

        return res.json({
            access_token: token,
            expires_in: expires_in,
            token_type: 'Bearer',
            message: 'logined'
        })
    } catch (error) {
        next(error);
    }


}

exports.me = async (req, res, next) => {
    return res.json({
        user: {
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role
        }
    })
}