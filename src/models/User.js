const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    name: String,
    email: {
        type: String,
        unique: true
    },
    phone: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    },
    cart:  [
    {
    item:{
        type: Schema.Types.ObjectId,
        ref: "Item"
    },
    quantity:{
      type:Number,
      default:1
    },
    _id:false
    }],
    history: [{
        type: Schema.Types.ObjectId,
        ref: "Invoice"
    }],
    itemsPurchased:[{
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
}, {
  toJSON: { virtuals:true },
  toObject:{virtuals:true}
});

userSchema.virtual('userReviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'user'
});

userSchema.virtual('cart.item', {
  ref: 'Item',
  localField: 'cart.item',
  foreignField: '_id'
});

export default mongoose.model('User', userSchema);
