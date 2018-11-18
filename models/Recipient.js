const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const recipientSchema = new Schema({
    email : String,
    responded : {type: Boolean, default : false}
});

/**
 * recipient is used as sub-document in Survey.js.
 * sicne each document in collection for MongoDB has size limit
 * in order to give each survey the maximizad number of recipients, 
 * recipient is sub-document for survey, but survey is not sub-document for user
 * if survey is sub-document for user and recipient is sub-documentfor survey
 * then each survey can have less recipients
 */
module.exports = recipientSchema;