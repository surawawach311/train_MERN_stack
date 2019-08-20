const User = require('../models/user');

exports.register = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

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