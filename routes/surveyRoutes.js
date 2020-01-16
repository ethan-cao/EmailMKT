const _ = require("lodash");
const {Path} = require('path-parser');
const {URL} = require("url");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("survey");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("..//services/emailTemplates/surveyTemplate");

module.exports = app => {
    app.get("/api/surveys", requireLogin, async (req, res) => {
        const surveys = await Survey.find({_user: req.user.id})
                                // do not include recipients, no need to fetch all recipients
                                .select({recipients: false}); 

        res.send(surveys);
    });

    app.get("/api/surveys/:surveyId/:choice", (req, res)=>{
        res.send("Thanks!");
    });

    // check https://app.sendgrid.com/settings/mail_settings  Event Notification
    // sendGrid notifies this app server once event happens after certain period of time
    app.post("/api/surveys/webhooks", async (req, res) => {
        const pathPattern = new Path("/api/surveys/:surveyId/:choice"); 
        
        _.chain(req.body)
            .map(({email, url}) => {
                const pathName = new URL(url).pathname; // path is something like /api/surveys/5c2a18c49e886220f1ecbdbc/yes
                const match = pathPattern.test(pathName);  // extract surveyId and choice
                if (match) {
                    return {email, surveyId: match.surveyId, choice: match.choice};
                }
            })
            .compact()
            .uniqBy("email", "surveyId")
            .each( ({surveyId, email, choice}) => {
                // execute data update in MongoDB for better performance 

                // use 1st param to find, use 2nd param to update the found record
                Survey.updateOne({
                    _id : surveyId,
                    recipients : {
                        $elemMatch : {email : email, responded : false}
                    }
                }, {
                    $inc : { [choice] : 1},  // increase
                    $set : { "recipients.$.responded" : true },    // $ refers to the matched record
                    lastResponded : new Date()
                }).exec();
            })
            .value();

        res.send({});
    });

    // we can pass arbitray number of arguments to it, and all arguments will be executed in order
    app.post("/api/surveys", requireLogin, requireCredits, async (req, res)=>{
        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(",").map(email => ({email:email.trim()})),
            _user : req.user.id,
            dateSent : Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey));

        // console.log(JSON.stringify(mailer));

        try{
            await mailer.send();  // wait for finishing sending all emails  

            await survey.save();

            req.user.credits -= 1;
            const user = await req.user.save(); // the current user object is obsolete as its credit decreased
            res.send(user); // send back the updated user model
        } catch(err){
            res.status(422).send(user); 
        }
    });
};