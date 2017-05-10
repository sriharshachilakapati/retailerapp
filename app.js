const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const insertAPI = require('./apis/insert');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/retailerapp', mongooseError =>
{
    if (mongooseError)
        throw mongooseError;

    let app = express();

    // Attach the middle wares to the app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ "extended": true }));
    app.use(express.static(path.join(__dirname, "public")));

    // Define the APIS in the server
    app.use('/insert', insertAPI);

    // Start the server
    app.listen(8080, expressErr =>
    {
        if (expressErr)
            throw expressErr;

        console.log("Server running on port 8080");
    });
});
