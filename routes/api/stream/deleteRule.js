const axios = require("axios").default;
module.exports = (req, res) => {
  let { id } = req.query;
  if (!id) return res.json({ error: "ID is required" });
  let ids = id.split(",");
  res.json({ delete: { ids } });
  axios({
    method: "POST",
    url: "https://api.twitter.com/2/tweets/search/stream/rules",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "content-type": "application/json"
    },
    data: { delete: { ids } }
  })
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
};
