require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const cors = require("cors");
const routes = require("./routes");
const http = require("http");
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const initiateStream = require('./twitter/initiateStream');
(async () => {
  io.on("connection", () => console.log("New Socket Connection"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'))
  app.use(routes);
  server.listen(port, () => console.log(`Listening to port ${port}`));
  initiateStream(io);
})();
