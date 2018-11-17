const express = require("express"); // common module system, currently supported in Node
const mongoose = require("mongoose");   // Object modelling in mongodb
const cookieSession = require("cookie-session");   // mirror session in cookie
const passport = require("passport");  // for authentication 
const bodyParser = require("body-parser");
const path = require("path");

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");

require("./models/users"); // only execute the script, since the script has no export, there is no return
require("./services/passport");  

// dynamic port binding, picked from Heroku, fallback to 500
const PORT = process.env.PORT || 5000;

// start db
mongoose.connect(keys.mongoURI); 

// start app
const app = express();

// use cookie based token authentication, middle ware
app.use(bodyParser.json());   // assign to req.body
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookies remian for 30 days
    keys : [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


// Routing logic
// the order matters, first check registed router
authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === "production"){
    // if request is not recognized, look into client/build
    // Express serve production assets. e.g. main.js
    app.use(express.static("client/build"));

    // if request is not found in client/build, just return index.html
    app.get("*", (req, res) => {
        console.log("asd");
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}



app.listen(PORT);