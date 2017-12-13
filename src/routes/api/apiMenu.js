import express from 'express'
import cloudinary from 'cloudinary'
import multer from 'multer'

import Menu from '../../models/MenuItem'
import User from "../../models/User";
import Review from "../../models/Review";

const router = express.Router();

router.route('/testmenu')
    .get(async (req, res) => {
        const menu = await Menu.find({})
            .populate({
                path: 'reviews',
                populate: {
                    path: 'user',
                    model: 'User'
                }
            });
        // let id = '5a30701b48d16206d04aa62e'
        // const review = await Review.find({user: id})
            res.json(menu)
    })

router.route('/menu')
    .get(async (req, res) => {
        const menu = await Menu.find({available: true}).populate({
            path:'reviews',
            populate:{path:'user'}
        })
        const response = menu.map((menuItem)=>{return {
            "_id": menuItem._id,
            "itemName": menuItem.name,
            "category": menuItem.category,
            "description": menuItem.description,
            "price": menuItem.price,
            "available": menuItem.available,
            "image": menuItem.image,
            "reviews":menuItem.reviews.map(review=>{
                return {
                   reviewId:review._id,
                   userId:review.user._id,
                   userName:review.user.name,
                   content:review.content,
                   rating:review.rating 
                }
        })
        }});
        res.json(response);
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
    try{
    /*  User.findOne(
           {"_id": req.body._id,
           "itemsReviewed":{ '$elemMatch':{item:req.body.name,beenReviewed:false,reviewContent:{"$not":/^$/g}}}}).then(output=>console.log(output)).catch(error=>{console.log(error)})
        User.findOneAndUpdate(
           {"_id": req.body._id},
           { "$addToSet": {"itemsReviewed":{item:req.body.name,reviewContent:req.body.review,beenReviewed:req.body.review?true:false}}}).then(output=>console.log(output)).catch(error=>{console.log(error)})*/
        let menu = await Menu.findOneAndUpdate(
           {"itemName": req.body.name},
           { "$push": {"reviews": {user:req.body.user,review:req.body.review,rating:req.body.rating}}});
            res.json(menu)
        }catch(error){
        res.send(error)
    }
})
router.post('/reviewvalue', async (req, res) => {
    const toResolve = [];
    Review.create(req.body.value).then(response=>console.log(response)).catch(error=>console.log(error))
    res.json(req.body);
})

router.post('/menuvalue', (req, res) => {
    const toResolve = [];
    Menu.create(req.body.value).then(response=>console.log(response)).catch(error=>console.log(error))
    res.json(req.body);
})

router.post('/uservalue', (req, res) => {
    const toResolve = [];
    User.create(req.body.value).then(response=>console.log(response)).catch(error=>console.log(error))
    res.json(req.body);
})


export default router;