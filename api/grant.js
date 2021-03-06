var grant = require("grant").vercel({
  config: require("./config.json"),
  session: { secret: "grant", store: require("../store") },
});

module.exports = async (req, res) => {
  if ("/connect/google" === req.url) {
    var state = { dynamic: { scope: ["openid"] } };
    console.log("state ✅", state);
  } else if ("/connect/twitter" === req.url) {
    var state = { dynamic: { key: "CONSUMER_KEY", secret: "CONSUMER_SECRET" } };
  }

  var { response, session } = await grant(req, res, state);
  console.log("session", session);
  console.log("response", response);
  if (response) {
    await session.remove();
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end(JSON.stringify(response, null, 2));
  }
};
