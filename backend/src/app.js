const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


//routes
const authrRoutes = require('./routes/auth')





// mongodb+srv://richa:admin@cluster0.gmphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://richa:admin@cluster0.gmphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex:true
  }).then(()=>{
    console.log('database connected')
  });


// to parse POST request to the server
app.use(bodyParser());

app.use('/api',authrRoutes)




  app.get("/", (req,res)=>{
    res.sendFile( "C:/Users/nessl/OneDrive/Desktop/webdevelopment/richa/public/index.html");
  })



// server is listening to the port :3000
app.listen(process.env.PORT || 5000, () => {
  console.log("lestening to port:5000")
});

// authentication of mailchimp
// https://us7.api.mailchimp.com/3.0/

// apiKey for mailchimp
// 8b8e0ffd21d6b1b4816ccf908a2af54d-us7
