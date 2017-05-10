const mongoose = require('mongoose');

let schema = mongoose.Schema({
    "id": {
        "type": Number,
        "required": true,
        "unique": true
    },

    "name": {
        "type": String,
        "required": true
    },

    "price": {
        "type": Number,
        "required": true
    }
});

let model = module.exports = mongoose.model('product', schema);
