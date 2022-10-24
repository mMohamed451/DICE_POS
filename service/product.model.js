
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const ProductSchema = new mongoose.Schema({
    picUrl: { type: String },
    description: { type: String },
    arabicDescription: { type: String },
    isDeleted: { type: Boolean },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

ProductSchema.plugin(uniqueValidator);
var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
