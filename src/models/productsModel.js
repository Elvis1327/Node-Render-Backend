const mongoose = require('mongoose');

const { Schema } = mongoose;

// Model Schema
const ProductsSchema = new Schema({
    productName: { 
        type: String, 
        required: true, 
        maxLength: 100 
    },
    productDescription: {
        type: String,
        required: true,
        maxLength: 100
    },
    productImage: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
        maxLength: 100   
    },
    productCategory: {
        type: String,
        ref: "Categories",
        required: true
    }
});

module.exports = mongoose.model('ProductSchema', ProductsSchema);



