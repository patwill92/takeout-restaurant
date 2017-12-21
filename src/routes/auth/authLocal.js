import express from 'express'
import bcrypt from 'bcrypt'
import passport from 'passport'
import {check, validationResult} from 'express-validator/check';

const router = express.Router();

import User from '../../models/User'
import validate from './middleware'

router.get('/current_user', (req, res) => {
    if (req.user) {
        delete req.user._doc.password;
        return res.send(req.user);
    } else {
        res.send('')
    }
});

router.route('/signup')
    .post(validate(check, User).signup, async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({errors: errors.mapped()});
        } else {
            let {name, email, phone, password} = req.body;
            let saltRounds = 10;
            try {
                let hash = await bcrypt.hash(password, saltRounds);
                let user = {
                    name,
                    email,
                    phone,
                    password: hash
                };
                let newUser = await User.create(user);
                console.log(newUser)
                req.login(newUser, err => {
                    if (err) { return next(err); }
                    return res.redirect('/');
                });
            } catch (e) {
                console.log(e);
                res.status(422).json({error: 'Sign up failed, please try again'});
            }
        }
    });

router.route('/login')
    .post(validate(check,User).login,
        passport.authenticate('local'),
        (req, res) => {
            return res.redirect('/')
        });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

export default router;