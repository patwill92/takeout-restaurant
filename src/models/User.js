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
    cart:  { type: String, default: '' },
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
  toObject:{virtuals:true},
  id:false
});

userSchema.virtual('userReviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'user'
});

export default mongoose.model('User', userSchema);
