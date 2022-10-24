
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

ProductSchema.plugin(uniqueValidator);
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;