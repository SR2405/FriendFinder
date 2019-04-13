var express = require ('express');
var path = require ('path');

// Tells node that we are creating an "express" server
var app = express();

// Set an initial port
var PORT = process.env.PORT || 8080;

//set up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

//NOTES
//make a server
//figure out what routes it needs
//go through the routes and work into those

//Hotrestaurants exercise - week 13 activity 16
    //week 13 stuff is the most relevant

    //build first then deploy to Heroku

    //test things frequently