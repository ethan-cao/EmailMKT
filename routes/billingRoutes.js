const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin")

module.exports = app => {
    app.post("/api/stripe", requireLogin, async (req, res) => {
        // body-parser put the authentication token to req.body.id 
        // so we can charge the user up to certian amount of money

        // charge object, represents the charge we ask the user
        const charge  = await stripe.charges.create({
            amount : 500,
            currency : "usd",
            description: " $5 for 5 credit",
            source : req.body.id
        });
        
        // once user is logged in, req.user is set to the user by passport.js
        req.user.credits += 5;
        const user = await req.user.save();
        //res.send(user); // send the updated user to client
    });
}