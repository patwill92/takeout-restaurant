import express from 'express'

import Cart from "../../models/Cart";

const router = express.Router();

router.post('/add_cart', async (req, res) => {
    let item = req.body;
    req.session.cart = req.session.cart || {};
    let cart = new Cart(req.session.cart);
    item = {...item, qty: 1};
    cart.addToCart(item);
    req.session.cart = cart;
    res.send(cart);
});

export default router;