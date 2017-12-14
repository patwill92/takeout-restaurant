import express from 'express'

const router = express.Router();

import {adminOnly} from "./middleware/secureRoutes";
import Menu from '../../models/MenuItem'
import User from "../../models/User";
import Review from "../../models/Review";

router.use(adminOnly);

router.route('/users')
    .get(async (req, res) => {
        const users = await User.find({});
        res.send(users)
    });

export default router;