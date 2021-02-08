const needle = require("needle");
module.exports = async params => {
  return await needle.get(
    "https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at",
    { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } }
  );
};