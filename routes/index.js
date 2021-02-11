const express = require('express');
const path = require('path');
const routes = express.Router();
const api = require("./api");
routes.use("/", express.static(path.join(__dirname,'public')));
routes.use("/api", api);
module.exports = routes;
