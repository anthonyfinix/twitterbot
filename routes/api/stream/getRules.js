const axios = require("axios").default;
module.exports = async (req, res) => {
  axios
    .get("https://api.twitter.com/2/tweets/search/stream/rules", {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    })
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
};
