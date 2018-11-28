const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("survey");
const Mailer = require("../services/Mailer");

module.exports = app => {
    // we can pass arbitray number of arguments to it, and all arguments will be executed in order
    app.post("api/surveys", requireLogin, requireCredits, (req, res)=>{
        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(",").map(email => {return {email: email.trim()}}),
            _user : req.user.id,
            dataSent : Date.now()
        })
    });

    const mailer = new Mailer(survey, surveyTemplate(usrvey));
};