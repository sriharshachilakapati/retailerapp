const express = require('express');
const productsModel = require('../models/products');

let router = module.exports = express.Router();

router.post('/', (req, res) =>
{
    let query = {
        "id": req.body.id
    };

    let updated = req.body.updated;

    productsModel.findOneAndUpdate(query, updated, {}, err =>
    {
        if (err)
        {
            console.error(err);
            res.send({
                "error": "Failed to update the entry"
            });
        }
        else
            res.send({
                "success": "Successfully updated the product entry"
            });
    });
});
