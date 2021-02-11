const stream = require("./stream");
const initiateStream = async io => {
  console.log("Twitter Streaming Initiated");
  let twitterStream = await stream();
  twitterStream.on("data", data => {
    console.log("_____________________________________");
    let { title } = data;
    if (title) {
      console.log(title)
      console.log('Error Occured. Retrying in 15 Minutes.')
        setTimeout(() => {
          initiateStream();
        }, 120000);
    } else {
      if (Buffer.isBuffer(data)) {
        try {
          let jsonData = JSON.parse(data);
          console.log(jsonData);
          io.emit("tweet", jsonData.data);
        } catch (e) {
          console.log(e);
        }
      }
    }
  });
};

module.exports = initiateStream;
