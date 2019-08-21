const express = require('express');
const router = express.Router();
const passportJWT = require('../middlewares/passportJWT');
const userController = require('../controllers/userController');
const { body } = require('express-validator');

//localhost:3000/api/user/register
router.post('/register',
    [
        body('name').not().isEmpty().withMessage('Plese input Name'),

        body('email').not().isEmpty().withMessage('Plese input Email')
            .isEmail().withMessage('Wrong format Email'),

        body('password').not().isEmpty().withMessage('Plese input Password')
            .isLength({ min: 3 }).withMessage('Password is more than 3 charecter')

    ]
    , userController.register);

//localhost:3000/api/user/login
router.post('/login', userController.login);
//get profile
//localhost:3000/api/user/me
router.get('/me',passportJWT.isLogin, userController.me);

module.exports = router;