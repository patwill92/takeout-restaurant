const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    name: {
        type: String,
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    available: {
        type: Boolean
    },
    image: {
        type: String
<<<<<<< HEAD
    }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

menuItemSchema.virtual('itemReviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'item'
=======
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
>>>>>>> 4c11aebc7f9d44e8aa9df0d96ed49d1f56b65d08
});

export default mongoose.model("Item", menuItemSchema);

