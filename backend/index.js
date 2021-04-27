const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const https = require("https");

// to parse POST request to the server
app.use(bodyparser.urlencoded({
  extended: true
}));


// GET request
app.get("/contact", (req, res) => {
    res.sendFile('public/index.html');
  })
  


// POST request
app.post("/contact", (req, res) => {
  const userName = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const data = {
    members: [{
      message: message,  
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: userName
      }
    }]
  }

  const jasondata = JSON.stringify(data);
  const url = "https://us7.api.mailchimp.com/3.0/lists/7d9953f5b4"

  const options = {
    method: "POST",
    auth: "necim1:a8b8e0ffd21d6b1b4816ccf908a2af54d-us7"
  }

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
    if(response.statusCode === 200)
    res.sendFile(__dirname + "/success.html");
    else (res.sendFile(__dirname +"/failure.html"));

    });

  });

  request.write(jasondata);
  request.end();

});
app.post("/failure",(req, res)=>{
  res.redirect("/");
})

// server is listening to the port :3000
app.listen(process.env.PORT || 3000, () => {
  console.log("lestening to port:3000")
});

// authentication of mailchimp
// https://us7.api.mailchimp.com/3.0/

// apiKey for mailchimp
// 8b8e0ffd21d6b1b4816ccf908a2af54d-us7
