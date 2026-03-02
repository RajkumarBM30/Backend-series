const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name is already exist"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/v2wwvdbki/vector-flat-illustration-grayscale-avatar-600nw-2264922221.webp",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
