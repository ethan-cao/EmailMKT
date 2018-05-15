const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// Authenticate Google using passportJS
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"   // this should be registered in Authorized redirect URIs
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
}));