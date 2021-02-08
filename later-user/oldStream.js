
// const needle = require("needle");
// const streamTweets = () => {
//   const stream = needle.get(
//     "https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at",
//     {
//       headers: {
//         Authorization:
//           "Bearer AAAAAAAAAAAAAAAAAAAAADaBMQEAAAAAOrvtthlW34vH7B7du1N3oUBGrlA%3DAldvPwp68npGCXoWvFjlr4ntDyBhv2LhYxikoM0w6K917r2VnT"
//       }
//     }
//   );

//   stream.on("data", data => {
//     console.log(data);
//     try {
//       const json = JSON.parse(data);
//       console.log(json);
//       console.log(Date.now());
//     } catch (e) {
//       console.log(e);
//     }
//   });
// };
// streamTweets();
