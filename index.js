const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// express app
const app = express();
const PORT = process.env.PORT;


// connect to mongodb
mongoose.connect("mongodb+srv://rwambui:12345@cluster0.zsey2xu.mongodb.net/?retryWrites=true&w=majority/booking");
// // to prevent duplication
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
// route export
app.use('/api',require('./routes/api'))

// listen for requests
app.listen(PORT, () => {
    console.log('Server is running on PORT ${PORT}');
 });







