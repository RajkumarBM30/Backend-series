const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register

async function registerController(req, res) {
  const { name, email, password } = req.body;
  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(404).json({
      message: "user not fuond with this email adress pls sing in",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registed successfully",
    user: {
      name: user.name,
      email: user.email,
    },
  });
}

//get me

async function getmeController(req, res) {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById(decoded.id);

  res.json({
    name: user.name,
    email: user.email,
  });
}

// login

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const isPasswordValid = hash === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("token", token);

  res.json({
    message: "user logged in successfully",
    user: {
      name: user.name,
      email: user.email,
    },
  });
}

module.exports = { registerController, getmeController, loginController };
