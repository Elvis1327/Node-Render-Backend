require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();

const mainRoutes = {
    stripe: '/stripe'
};


// Middlewares
app.use(cors());
app.use(express.static('src/public'));
app.use(express.json());
app.use( mainRoutes.stripe, require('./routes/stripeCheckout') );

module.exports = { app };
