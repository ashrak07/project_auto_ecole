const Users = require("../Models/userModel");
const Courses = require("../Models/courseModel");
const asyncHandler = require("express-async-handler");

const dashboard = asyncHandler(async (req, res) => {
  const teacher = await Users.find({ role: "teacher" }).lean();
  const student = await Users.find({ role: "student" }).lean();
  const user = await Users.find().lean();
  if (teacher && student && user) {
    console.log(teacher, user, student);
    res.status(200).json({
      teacher: teacher.length,
      student: student.length,
      user: user.length,
    });
  }
});

module.exports = { dashboard };
