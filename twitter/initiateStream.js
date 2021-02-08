const stream = require('./stream');
const initiateStream = async (io)=>{
  console.log('Twitter Streaming Initiated')
    let twitterStream = await stream();
    twitterStream.on("data", data => {
      console.log(data);
      console.log("____________________");
      if (Buffer.isBuffer(data)) {
        try {
          let jsonData = JSON.parse(data)
          io.emit('twitterStream',jsonData);
        } catch (e) {
          console.log(e);
        }
      }else{
        if(data.title){
          if(data.title === 'ConnectionException' && data.connection_issue === 'TooManyConnections'){
            setTimeout(()=>{
              initiateStream();
            },900000)
          }else{
            setTimeout(()=>{
              initiateStream();
            },900000)
          }
        }
      }
    });
  }

  module.exports = initiateStream;