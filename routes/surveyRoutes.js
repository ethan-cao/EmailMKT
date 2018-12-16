const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("survey");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("..//services/emailTemplates/surveyTemplate");

module.exports = app => {
    app.get("/api/surveys/thanks", (req, res)=>{
        console.log("1")
        res.send("Thanks!");
    });

    // we can pass arbitray number of arguments to it, and all arguments will be executed in order
    app.post("/api/surveys", requireLogin, requireCredits, async (req, res)=>{
        console.log("2")
        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(",").map(email => {return {email: email.trim()}}),
            _user : req.user.id,
            dataSent : Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey));

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