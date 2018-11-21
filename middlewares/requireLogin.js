module.exports = (req, res, next) => {
    // user did not login, then exit
    if(!req.user){
        return res.status(401).send({"error":"You must login."});
    } 
    
    // next is a function, which will be invoked when certain conditions are met
    // https://expressjs.com/en/guide/writing-middleware.html
    next();
}