const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");

//Post/api/auth
authRouter.post("/register", authController.registerController);

//get
authRouter.get("/get-me", authController.getmeController);

authRouter.post("/login", authController.loginController);

module.exports = authRouter;
