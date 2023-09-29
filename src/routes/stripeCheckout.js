const { Router } = require('express');
const stripe = require('stripe')(process.env.STRIPE_KEY);


const router = Router();

router.post('/checkout', async (req, res) => {

    const items = req.body;

    const line_items = items.map((item) => {

        return {
            quantity: item.productQuantity,
            price_data: {
                currency: 'usd',
                unit_amount: item.productPrice * 100,
                product_data: {
                    name: item.productTitle,
                    images: [item.productImage]
                }
            }
        };

    });

    const seccion = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: "https://react-ecommerce-tan.vercel.app/successful",
        cancel_url: "https://react-ecommerce-tan.vercel.app/best-selling"
    });

    res.status(200).json(seccion.url);

});

module.exports = router;


