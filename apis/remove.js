const express = require('express');
const productsModel = require('../models/products');

let router = module.exports = express.Router();

router.post('/', (req, res) =>
{
    let query = {
        "id": req.body.id
    };

    productsModel.findOneAndRemove(query, {}, err =>
    {
        if (err)
        {
            console.error(err);
            res.send({
                "error": "Failed to remove product from catalogue"
            });
        }
        else
            res.send({
                "success": "Product removed from catalogue"
            });
    });
});
