const express = require("express");
const {
  createCourse,
  addCheckpoint,
  getPlanning,
  deleteCourse,
  generateCourses,
} = require("../Controllers/courseController");

const { roleMiddleware } = require("../Middlewares/roleMiddleware");

const router = express.Router();

// Création de cours — manager uniquement
router.post("/courses", roleMiddleware(["manager"]), createCourse);

// Ajout de checkpoint — teacher uniquement
router.post("/courses/checkpoint", roleMiddleware(["teacher"]), addCheckpoint);

// Consultation planning — tous les rôles
router.get(
  "/courses/planning",
  roleMiddleware(["manager", "teacher", "student"]),
  getPlanning
);

// Suppression de cours — manager uniquement
router.delete("/courses/:id", roleMiddleware(["manager"]), deleteCourse);

router.post("/courses/generate", generateCourses);

module.exports = router;
