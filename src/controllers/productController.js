const { response, request } = require('express');
const ProductModel = require('../models/productsModel');



// Create one Product
const createProduct = async (req = request, res = response) => {

    console.log(req.body)
    try{
        const product = new ProductModel(req.body);


        // const validateProduct = product.map((product) => {
        //     if(product.productCategory )
        // })
                        
        await product.save();
        return res.status(200).json(product);
    }catch(err){
        console.log(`Something bad happened ${err}`);
    };

};

// Get All Products
const getAllProducts = async (req = request, res = response) => {

    try {
        const product = await ProductModel.find();
        if(product){
            return res.status(200).json(product);
        };
    } catch (err) {
        console.log(`Something bad happened ${err}`);
    };
};


module.exports = {
    createProduct,
    getAllProducts
};






