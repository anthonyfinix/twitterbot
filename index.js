require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const cors = require("cors");
const routes = require("./routes");
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);
const initiateStream = require("./twitter/initiateStream");
(async () => {
  io.on("connection", (socket) => {
    console.log()
    console.log("New Socket Connection");
  });
  io.use((socket,next)=>{
    if(socket.handshake.auth.token !== 'anthony'){
      console.log('auth error')
      next(new Error('Authentication Error'))
    }else{
      console.log('no error')
      next()
    }
  })
  io.on("data", data => {
    console.log(data);
  });
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(routes);
  server.listen(port, () => console.log(`Listening to port ${port}`));
  initiateStream(io);
})();
