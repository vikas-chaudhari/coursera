const jwt = require("jsonwebtoken");

const setToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET);
  console.log("token from setToken :  ", token);
  return token;
};

const getDataFromToken = (token) => {
  payload = jwt.verify(token, process.env.SECRET);
  console.log("payload from getDataFromToken :  ", payload);
};
module.exports = {getDataFromToken,setToken}