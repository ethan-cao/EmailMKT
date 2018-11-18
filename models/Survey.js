const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Recipient = require("./Recipient");

const surveySchema = new Schema({
    title : String,
    body : String,
    subject : String,
    recipients : [Recipient],
    yes : {type: Number, default: 0},
    no : {type: Number, default: 0},
    _user : {type: Schema.Types.ObjectId, ref : "User"}, // prefix _ is just convension to make it is reference filed
    dateSent : Date,
    lastResponse : Date
});

mongoose.model("survey", surveySchema);