import express from 'express'
import passport from 'passport'

const router = express.Router();

router.get('/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/google/callback', passport.authenticate('google', {scope: "email"}), (req, res) => {
    return res.redirect('/')
});

router.get('/facebook', passport.authenticate('facebook', {scope: "email"}));

router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    return res.redirect('/')
});

export default router;