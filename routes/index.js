const routes = require("express").Router();
const api = require("./api");
routes.get("/", (req, res) => res.send("Twitter BOT"));
routes.use("/api", api);
module.exports = routes;
