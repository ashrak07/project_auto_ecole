const express = require("express");
const {
  createCourse,
  addCheckpoint,
  getPlanning,
  deleteCourse,
  generateCourses,
  getAllCourse,
  getAllCoursesWithStatus,
  getAllPlannings,
} = require("../Controllers/courseController");

const { roleMiddleware } = require("../Middlewares/roleMiddleware");

const router = express.Router();

// Création de cours — manager uniquement
// router.post("/courses", roleMiddleware(["manager"]), createCourse);
router.post("/courses", createCourse);

// Ajout de checkpoint — teacher uniquement
router.post("/courses/checkpoint", roleMiddleware(["teacher"]), addCheckpoint);

// Consultation planning — tous les rôles
router.get(
  "/courses/planning",
  roleMiddleware(["manager", "teacher", "student"]),
  getPlanning
);

router.get("/courses", getAllCourse);
router.get("/courses/teacher", getAllCoursesWithStatus);
router.get("/courses/schedule", getAllPlannings);

// Suppression de cours — manager uniquement
router.delete("/courses/:id", roleMiddleware(["manager"]), deleteCourse);

router.post("/courses/generate", generateCourses);

module.exports = router;
