import express from 'express'

import Menu from '../../models/MenuItem'

const router = express.Router();

router.get('/menu', async (req, res) => {
    let menu = await Menu.find({available: true});
    res.send(menu);
})

export default router;