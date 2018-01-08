class Cart {
    constructor(currentCart) {
        this.items = currentCart.items || [];
        this.totalPrice = currentCart.totalPrice || 0;
        this.totalQty = currentCart.totalQty || 0;
    }
    addToCart(item) {
        if (!this.items.length) {
            this.items = [...this.items, item]
        } else {
            let exists = false;
            for (let i = 0; i < this.items.length; i++) {
                if (item._id === this.items[i]._id) {
                    this.items[i].qty += item.qty;
                    exists = true;
                    break;
                }
            }
            if(!exists) {
                this.items = [...this.items, item]
            }
        }
        this.totalQty += item.qty;
        this.totalPrice += item.price * item.qty;
    }
}

export default Cart;