const { getDataFromToken } = require("../services/authentication");
const { userModel } = require("../models/user");

checkUserAuth = async (req, resp, next) => {
  try {
    const token = req.headers["authorization"];
    console.log("authToken :" + token);
    if (!token || token == undefined) {
      resp.json({ Error: "No token found" });
    }
    const user = getDataFromToken(token);
    await userModel.findOne({ email: user.email });
    if (!user) {
      resp.json({ Error: "No user found though token" });
    }
    next();
  } catch (err) {}
};

module.exports = { checkUserAuth };
