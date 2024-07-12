const express = require("express");
const { userModel } = require("../models/user");
const { getHashPassword, setHashPassword } = require("../services/crypto");
const { setToken, getDataFromToken } = require("../services/authentication");
const { checkUserAuth } = require("../middlewares/authentication");

const router = express.Router();

router.post("/signup", async (req, resp) => {
  const user = req.body;
  if (!user) {
    resp.json({ error: "user undefined" });
  }
  const { salt, hashedPassword } = setHashPassword(user.password);
  user.salt = salt;
  user.password = hashedPassword;
  console.log(user);
  const data = await userModel.create(user);

  const token = setToken({ fullName: data.fullName, email: data.email });
  return resp.send({
    token: `Bearer ${token}`,
    user: { fullName: data.fullName, email: data.email },
  });
  // resp.json({ success: "signup successful" });
});

// "fullName": "vikas P chaudhari",
// "email": "vikas1@test.com",
// "salt":"[�Vc��zSXFr����",
// "password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
// "profileImage": "",
// "courseList": [],
// "_id": "668286ce2894130544032944",
// "createdAt": "2024-07-01T10:37:02.161Z",
// "updatedAt": "2024-07-01T10:37:02.161Z",
// "__v": 0
// }

router.post("/login", async (req, resp) => {
  const user = req.body;
  const data = await userModel.findOne({
    email: user.email,
  });
  console.log("user : ", user);
  console.log("data : ", data);
  if (data) {
    const newHashedPassword = getHashPassword(user.password, data.salt);
    console.log("hashedPass  : ", newHashedPassword);
    console.log("DBpass  : ", data.password);
    if (newHashedPassword === data.password) {
      console.log(true);
      const token = setToken({ fullName: data.fullName, email: data.email });
      return resp.json({
        token: `Bearer ${token}`,
        user: { fullName: data.fullName, email: data.email },
      });
    }
  } else {
    return resp.json({ user: null, password: null });
    // throw new Error("Bad credentials");
  }
});



module.exports = router;
