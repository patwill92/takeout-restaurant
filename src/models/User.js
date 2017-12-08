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
    cart:  { type: String, default: '' },
    history: [{
        type: Schema.Types.ObjectId,
        ref: "Invoice"
    }]
});

export default mongoose.model('User', userSchema);
