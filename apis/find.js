const express = require('express');
const productsModel = require('../models/products');

let router = module.exports = express.Router();

router.get('/all', (req, res) =>
{
    productsModel.find({}, (err, data) =>
    {
        if (err)
        {
            console.error(err);
            res.send({
                "error": "Failed to populate the entries"
            });
        }
        else
        {
            let response = data.map(product => ({
                "id": product.id,
                "name": product.name,
                "price": product.price
            }));

            res.send(response);
        }
    });
});
