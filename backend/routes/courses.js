const express = require("express");
const { courseModel } = require("../models/courses");
const { checkUserAuth } = require("../middlewares/authentication");

const router = express.Router();
router.use(checkUserAuth);

router.post("/addCourse", async (req, resp) => {
  courseData = req.body;
  const data = await courseModel.create({ ...courseData, createdBy: "" });
  resp.send(data);
});
module.exports = router;
