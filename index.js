const express = require("express"); // common module system, currently supported in Node
const mongoose = require("mongoose");   // Object modelling in mongodb
const cookieSession = require("cookie-session");   // mirror session in cookie
const passport = require("passport");  // for authentication 
const path = require("path");

require("./models/User"); // only execute the script, since the script has no export, there is no return
require("./models/Survey"); 
require("./services/passport");  

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");

// start app
const app = express();

// dynamic port binding, picked from Heroku, fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// start db
mongoose.connect(keys.mongoURI); 

// use cookie based token authentication, middle ware
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookies remian for 30 days
    keys : [keys.cookieKey]
}));
app.use(express.json()); // assign to req.body
app.use(passport.initialize());
app.use(passport.session());

// Routing logic, the order matters, first check registed router
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV === "production"){
    // if request is not recognized, look into client/build
    // Express serve client production assets. e.g. main.js
    app.use(express.static("client/build"));

    // if request is not found in client/build, just return index.html
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}