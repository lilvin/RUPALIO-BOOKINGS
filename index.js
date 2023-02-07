const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// express app
const app = express();
const PORT = process.env.PORT;


// connect to mongodb
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);
// // to prevent duplication
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
// route export
app.use('/api',require('./routes/api'))

// listen for requests
app.listen(PORT, () => {
    console.log('Server is running on PORT ${PORT}');
 });







