import express from 'express'

const router = express.Router();

import {adminOnly} from "./middleware/secureRoutes";
import User from "../../models/User";

router.use(adminOnly);

router.route('/users')
    .get(async (req, res) => {
        const users = await User.find({});
        res.send(users)
    });

router.route('/users')
    .get(async (req, res) => {
    let users = await User.find({}).populate({
        path: 'userReviews',
        populate: {path: 'item'}
    });
    res.send(users)
})

export default router;