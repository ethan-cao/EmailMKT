const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// Express Server router
// handing request proxied by React server as well, setting is client/package.json
module.exports = (app) => {
    // create router handle watching for HTTP request accessing "/"
    app.get("/", (req, res)=>{
        res.send({greeting:"hello, world"});
    });

    app.get("/auth/google", passport.authenticate("google", {scope:['profile', "email"]}));
    app.get(
        "/auth/google/callback", 
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/surveys");
        }
    );

    app.get("/api/logout", (req, res) => {
        console.log("loggedout");
        req.logout();  // kill the cookie
        res.redirect("/");
    });

    app.get("/api/current_user", (req, res)=>{
        res.send(req.user);
        // in authReducer, action.data = req.user
    });
};