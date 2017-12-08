const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: "Item"
    },
    comments: {
        type: String
    },
    qty: {
        type: Number
    }
});

export default mongoose.model("Order", orderSchema);
