import express from 'express'
import cloudinary from 'cloudinary'
import multer from 'multer'

import Menu from '../../models/MenuItem'
import User from "../../models/User";
import Review from "../../models/Review";

const router = express.Router();

router.route('/menu')
    .get(async (req, res) => {
        const menu = await Menu.find().populate({
            path: 'itemReviews',
            populate: {path: 'user', select: 'name'}
        })
        res.json(menu.map(menuItem=>{return {...menuItem,currentReview:'',starAmount:0,mouseOverStarAmount:0,showInput:false,showReviews:false}}));
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
router.post('/addreview', async (req, res) => {
    try {
        let review = await Review.create(
            {
                user: req.body.user,
                content: req.body.content,
                rating: req.body.rating,
                item: req.body.item
            });
        res.json(menu)
    } catch (error) {
        res.send(error)
    }
})
//can later be implemented with a $match version for oath
router.get('/getusers', async (req, res) => {
    try {
        let users = await User.aggregate([{
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "user",
                as: "userReviews"
            }
        }, {
            $unwind: "$userReviews"
        }, {
            $group: {
                _id: "$_id",
                "name": {$first: "$name"},
                "email": {$first: "$email"},
                "phone": {$first: "$phone"},
                "itemsPurchased": {$first: "$itemsPurchased"},
                "history": {$first: "$history"},
                "cart": {$first: "$cart"},
                "admin": {$first: "$admin"},
                userReviews: {$push: "$userReviews._id"}
            }
        }
        ])
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

router.post('/reviewvalue', async (req, res) => {
    const toResolve = [];
    Review.create(req.body.value).then(response => console.log(response)).catch(error => console.log(error))
    res.json(req.body);
})

router.get('/deletetestingnow', async (req, res) => {
    const toResolve = [];
    try {
        const result = await User.update({_id: req.query.id}, {$pop: {"itemsPurchased": 1}})
        res.json(result);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    const result = await User.update({_id: "5a31c79d88d76d04337af7b6"}, {$pop: {"itemsPurchased": 1}})
})

router.post('/menuvalue', (req, res) => {
    const toResolve = [];
    Menu.create(req.body.value).then(response => console.log(response)).catch(error => console.log(error))
    res.json(req.body);
})


router.post('/uservalue', (req, res) => {
    const toResolve = [];
    User.create(req.body.value).then(response => console.log(response)).catch(error => console.log(error))
    res.json(req.body);
})


export default router;