const express = require("express");  // common module system, currently supported in Node
const app = express();


// create router handle watching for HTTP request accessing "/"
app.get("/", (request, response)=>{
    response.send({hi:"world"});
});

// dynamic port binding, picked from Heroku, fallback to 5000
const PORT = process.env.PORT || 5000 ;
// Let Node listening to port 5000
app.listen(PORT); 
