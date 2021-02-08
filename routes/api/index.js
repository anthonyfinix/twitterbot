const routes = require("express").Router();
const twitterStream = require("./stream");

routes.get('/',(req,res)=>res.send('API'));
routes.use("/stream", twitterStream);

module.exports = routes;
