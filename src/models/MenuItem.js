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
    }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

menuItemSchema.virtual('itemReviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'item'
});

export default mongoose.model("Item", menuItemSchema);

