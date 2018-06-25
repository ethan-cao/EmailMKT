const express = require("express"); // common module system, currently supported in Node
const mongoose = require("mongoose");   // Object modelling in mongodb
const cookieSession = require("cookie-session");   // mirror session in cookie
const passport = require("passport");

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
// only execute the script, since the script has no export, there is no return
require("./models/users");
require("./services/passport");  

// dynamic port binding, picked from Heroku, fallback to 500
const PORT = process.env.PORT || 5000;

// start db
mongoose.connect(keys.mongoURI); 

// start app
const app = express();

// use cookie based token authentication
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookies remian for 30 days
    keys : [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(PORT);