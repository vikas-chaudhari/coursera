const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },
    courseList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
