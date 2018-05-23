const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

module.exports = (app) => {
// create router handle watching for HTTP request accessing "/"
    app.get("/", (req, res)=>{
        res.send({greeting:"hello, world"});
    });

    app.get("/auth/google", passport.authenticate("google", {scope:['profile', "email"]}));

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/logout", (req, res) => {
        req.logout();  // kill the cookie
        res.send(req.user);
    });

    app.get("/api/current_user", (req, res)=>{
        res.send(req.user);
    });
};