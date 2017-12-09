import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import {Strategy as FacebookStrategy} from 'passport-facebook'
import {Strategy as LocalStrategy} from 'passport-local'
import bcrypt from 'bcrypt'

import keys from '../config/keys'
import User from '../models/User'

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (username, password, done) {
        User.findOne({email: username}).then(user => {
            if (!user) {
                done(null, false, {message: 'Unknown User'});
            }
            bcrypt.compare(password, user.password)
                .then((match) => {
                    if (match) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err => {
                    if (err) throw err;
                });
        });
    }));

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        let email = profile.emails.length > 0 ? profile.emails[0].value : '';
        let user = await User.findOne({email});
        if (user) {
            return done(null, user)
        }
        user = {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails.length > 0 ? profile.emails[0].value : ''
        };
        let newUser = await User(user).save();
        done(null, newUser)
    })
);

passport.use(new FacebookStrategy({
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'emails']
    },
    async (accessToken, refreshToken, profile, done) => {
    let email = profile.emails.length > 0 ? profile.emails[0].value : '';
        let user = await User.findOne({email});
        if (user) {
            return done(null, user)
        }
        user = {
            facebookId: profile.id,
            name: profile.displayName,
            email: profile.emails.length > 0 ? profile.emails[0].value : ''
        };
        let newUser = await User(user).save();
        done(null, newUser)
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});