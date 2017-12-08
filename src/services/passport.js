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
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({googleId: profile.id})
            .then(existingUser => {
                if (existingUser) {
                    done(null, existingUser)
                } else {
                    let user = {
                        googleId: profile.id,
                        name: profile.displayName,
                    };
                    if (profile.emails.length > 0) {
                        user.email = profile.emails[0].value;
                    }
                    new User(user)
                        .save()
                        .then(user => done(null, user))
                }
            }).catch((err) => {
            console.log(err);
        })
    })
);

passport.use(new FacebookStrategy({
        clientID: '174898419734009',
        clientSecret: '0b1a3aaaf8dbd7635d01c4741d1ee443',
        callbackURL: '/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({facebookId: profile.id})
            .then(existingUser => {
                if (existingUser) {
                    console.log(existingUser);
                    done(null, existingUser)
                } else {
                    let user = {
                        facebookId: profile.id,
                        name: profile.displayName,
                    };
                    new User(user)
                        .save()
                        .then(user => done(null, user))
                }
            }).catch((err) => {
            console.log(err);
        })
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});