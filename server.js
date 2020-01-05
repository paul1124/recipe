const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const URI = process.env.MONGO_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection
    .once('open', () => {
        console.log('MongoDB Database Connection established successfully');
    })
    .catch(err => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});