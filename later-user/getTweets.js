
// app.get("/tweets", (req, res) => {
//   axios
//     .get("https://api.twitter.com/2/tweets?", {
//       headers: {
//         Authorization:
//           "Bearer AAAAAAAAAAAAAAAAAAAAADaBMQEAAAAAOrvtthlW34vH7B7du1N3oUBGrlA%3DAldvPwp68npGCXoWvFjlr4ntDyBhv2LhYxikoM0w6K917r2VnT"
//       },
//       params: {
//         ids: "1228393702244134912,1227640996038684673,1199786642791452673"
//       }
//     })
//     .then(response => {
//       console.log(response.data);
//       res.json(response.data);
//     })
//     .catch(error => res.json(error));
// });