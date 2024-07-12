const crypto = require("crypto");

const getHashPassword = (salt, password) => {
  const hashedPassword = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  console.log("hashed pass form getHashPassword  : ", hashedPassword);
  return hashedPassword;
};

const setHashPassword = (password) => {
  const salt = crypto.randomBytes(16);
  const hashedPassword = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  console.log("hashed pass form setHashPassword  : ", hashedPassword);
  return { salt, hashedPassword };
};

module.exports = { getHashPassword, setHashPassword };
