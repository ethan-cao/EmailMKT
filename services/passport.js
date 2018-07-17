const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Users = mongoose.model("users");

// Mongoose model instane --> id
// once authenticated, put user's id in side the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// id --> Mongoose model instane 
passport.deserializeUser((id, done) => {
  Users.findById(id).then(user => {
    done(null, user);
  });
});

// Authenticate Google OAuth using passportJS
passport.use(
    new GoogleStrategy(
    {
       clientID: keys.googleClientID,
       clientSecret: keys.googleClientSecret,
       callbackURL: "/auth/google/callback", // this should be registered in Authorized redirect URIs
       proxy: true   // use http 
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
           return done(null, existingUser);
        }

        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
    }

// use Promise 
/*  
(accessToken, refreshToken, profile, done) => {
    Users.findOne({googleId: profile.id}) 
        .then((existingUser) => {
            if (existingUser) {
               done(null, existingUser); 
            } else {
                new Users({googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        });
 }
*/

));