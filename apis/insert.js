const express = require('express');
const productsModel = require('../models/products');

let router = module.exports = express.Router();

router.post('/', (req, res) =>
{
    productsModel.create(req.body, err =>
    {
        if (err)
        {
            console.error(err);
            res.send({
                "error": "Failed to insert product into catalogue"
            });
        }
        else
            res.send({
                "success": "Inserted successfully"
            });
    });
});
