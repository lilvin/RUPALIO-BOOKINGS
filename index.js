const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./routes/api');
const { route } = require('./routes/api');
require('dotenv').config();
const Booking = require('./models/booking');

// express app
const app = express();
const PORT = process.env.PORT;


// connect to mongodb
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);
// // to prevent duplication
mongoose.Promise = global.Promise;


// route export
app.use('/api',require('./routes/api'));

//register view engine
app.set('view engine', 'ejs');
//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// listen for requests
app.listen(PORT, () => {
    console.log('Server is running on PORT ${PORT}');
 });


//  / view engine connection
    app.get('/', (req, res)=>{
    res.render('index');
    router.patch('/:id', async function (req, res) {
        const id = req.params.id;
        const updatedData = req.body;
        console.log(id)
        console.log(updatedData)

        try {
            const dataUpdate = await bookingModel.findByIdAndUpdate(id, updatedData, { new: true });
            res.status(200).json(dataUpdate);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
     });
    });


  //  db form data collections

    app.post('./routes/api',(req,res)=>{

    const booking = new booking(req.body);
      booking.save()
    .then((results) =>{S
        res.redirect('/');
        console.log(req.body);
    }).catch(next);

});

   //  404 error

app.use((req, res) =>{
   res.status(404).render('404', {title: '404'});

  });

