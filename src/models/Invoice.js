const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    totalQty: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});

export default mongoose.model("Invoice", invoiceSchema);
