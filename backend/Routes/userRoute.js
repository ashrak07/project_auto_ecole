const express = require("express");
const router = express.Router();
// const { roleMiddleware } = require("../Middlewares/roleMiddleware");
const {
  createUser,
  login,
  deleteUser,
  getAllUsers,
  getUsersByPermis,
  getUsersByRole,
  getTeacherUser,
  getStudentUser,
} = require("../Controllers/authController");

router.post("/auth/create-user", createUser);

router.get("/user", getAllUsers);

router.post("/user/:type", getUsersByPermis);

router.get("/user/teacher", getTeacherUser);

router.get("/user/student", getStudentUser);

router.post("/auth/login", login);

router.delete("/users/:id", deleteUser);

module.exports = router;
