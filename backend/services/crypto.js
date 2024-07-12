const crypto = require("crypto");

const getHashPassword = (password, salt) => {
  console.log(typeof salt);
  const hashedPassword = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  return hashedPassword;
};

const setHashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  console.log(typeof salt);

  const hashedPassword = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  return { salt, hashedPassword };
};

module.exports = { getHashPassword, setHashPassword };
