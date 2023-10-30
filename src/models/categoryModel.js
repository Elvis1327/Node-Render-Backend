const mongoose = require('mongoose');
const { Schema } = mongoose;


const CategoryProductSchema = Schema({
    Categories: {
        type: String,
        required: true,
        maxLength: 100
    }
});

module.exports = mongoose.model('CategoryProduct', CategoryProductSchema);

