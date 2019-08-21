const User = require('../models/user');
const { validationResult } = require('express-validator')

exports.register = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

        const errorValidation = validationResult(req);
        if(!errorValidation.isEmpty()){
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

exports.login = (req, res, next) => {
    return res.json({
        message: 'logined'
    })
}