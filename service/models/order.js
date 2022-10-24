
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const OrderSchema = new mongoose.Schema({
    products: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            quantity: { type: Number, default: 1 },
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

OrderSchema.plugin(uniqueValidator);
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;