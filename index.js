const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
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

//register view engine
app.set('view engine', 'ejs');
//middleware and static files
app.use(express.static('public'));
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
   //  db form data collection
   
   //  404 error
  
app.use((req, res) =>{
   res.status(404).render('404', {title: '404'});
  
  });