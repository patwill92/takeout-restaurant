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
});

menuItemSchema.statics.getClientMenu = function() {
    return this.find({available: true})
}

menuItemSchema.statics.getAdminMenu = function() {
    return this.find({available: false})
}

export default mongoose.model("Item", menuItemSchema);

