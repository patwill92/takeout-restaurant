const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/', async (req, res) => {
    const charge = await stripe.charges.create({
        amount: 13 * 100,
        currency: 'usd',
        description: `Order for patrick`,
        source: req.body.token.id
    });
    console.log(charge);
    res.send({charge})
});

export default router;