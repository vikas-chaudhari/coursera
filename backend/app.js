const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/user");
const courseRouter = require("./routes/courses");
const cookieParser = require("cookie-parser");
const { checkUserAuth } = require("./middlewares/authentication");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use(checkUserAuth);
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/courses", courseRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected!");
  })
  .catch(() => {
    console.log("Error while connecting DB!");
  });

app.get("/", (req, resp) => {
  resp.send("welcome");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
