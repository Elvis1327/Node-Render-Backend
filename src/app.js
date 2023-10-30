require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connnectToMongoDb } = require('./config/database');


const app = express();

// Database Connection
connnectToMongoDb();

// Middlewares
app.use(cors());
app.use(express.static('src/public'));
app.use(express.json());


// Object to define Routes
const mainRoutes = {
    stripe: '/stripe',
    product: "/api/products"
};

// Routes
app.use( mainRoutes.stripe, require('./routes/stripeCheckout') );
app.use( mainRoutes.product, require('./routes/productRoute') );


module.exports = { app };
