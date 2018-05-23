const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const userSchema = new Schema({
    googleId : String
});
 
// use schema userSchema for Mongocollections 
mongoose.model("users", userSchema); 