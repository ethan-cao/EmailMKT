const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

const userSchema = new Schema({
    googleId : String,
    credits: { type : Number, default : 0}
});
 
// use schema userSchema for Mongo collections 
mongoose.model("user", userSchema); 