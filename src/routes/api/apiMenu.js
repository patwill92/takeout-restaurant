import express from 'express'
import cloudinary from 'cloudinary'
import multer from 'multer'

import Menu from '../../models/MenuItem'
import User from "../../models/User";

const router = express.Router();

router.route('/menu')
    .get(async (req, res) => {
        let menu = await Menu.find({available: true});
        res.send(menu);
    })
    .post(multer().single('image'),
        async (req, res) => {
            cloudinary.v2.uploader.upload_stream({resource_type: 'raw'}, async (err, image) => {
                try {
                    let {secure_url} = image;
                    let menuItem = {
                        ...req.body,
                        image: secure_url,
                        available: !!parseInt(req.body.available)
                    };
                    let newMenuItem = await Menu.create(menuItem);
                    return res.status(200).json(newMenuItem)
                } catch (e) {
                    res.status(422).json({message: 'Item could not be added', error: e});
                }
            }).end(req.file.buffer);
        });


export default router;