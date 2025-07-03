const express = require("express");
const router = express.Router();
// const { roleMiddleware } = require("../Middlewares/roleMiddleware");
const {
  createUser,
  login,
  deleteUser,
} = require("../Controllers/authController");

router.post("/auth/create-user", createUser);

router.post("/auth/login", login);

router.delete("/users/:id", deleteUser);

module.exports = router;
