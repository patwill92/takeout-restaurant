const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: "Item"
    },
    content: {
        type: String
    },
    rating: {
        type: Number
    }
});

export default mongoose.model("Review", reviewSchema);

