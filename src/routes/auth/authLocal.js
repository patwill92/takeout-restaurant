import express from 'express'
import bcrypt from 'bcrypt'
import passport from 'passport'
import {check, validationResult} from 'express-validator/check';

const router = express.Router();

import User from '../../models/User'
import validate from './middleware'

router.get('/current_user', (req, res) => {
    if (req.user) {
        delete req.user.password;
        return res.send(req.user);
    } else {
        res.send('')
    }
});

router.post('/signup', validate(check, User).signup, async (req, res, next) => {
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
            req.login(newUser, err => {
                if (err) { return next(err); }
                delete newUser._doc.password;
                return res.status(200).json(newUser);
            });
        } catch (e) {
            console.log(e);
            res.status(422).json({error: 'Sign up failed, please try again'});
        }
    }
});

router.post('/login',
    validate(check, User).login,
    passport.authenticate('local'),
    (req, res) => {
        delete req.user.password;
        res.send(req.user);
    });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

export default router;