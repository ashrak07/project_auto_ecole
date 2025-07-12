const Course = require("../Models/courseModel");
const Check = require("../Models/checkPointModel");
const Users = require("../Models/userModel");
const asyncHandler = require("express-async-handler");

// const addCheckpoint = async (req, res) => {
//   try {
//     const { courseId, chapterIndex } = req.body;

//     const course = await Course.findById(courseId);
//     if (!course) return res.status(404).json({ msg: "Cours introuvable" });

//     const chapter = course.chapters[chapterIndex];
//     if (!chapter) return res.status(400).json({ msg: "Chapitre introuvable" });

//     if (chapter.checkpoint.done) {
//       return res.status(400).json({ msg: "Chapitre déjà validé" });
//     }

//     chapter.checkpoint = {
//       done: true,
//       date: new Date(),
//     };

//     await course.save();

//     res.json({ msg: "Chapitre validé avec succès" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: "Erreur serveur" });
//   }
// };

const createCourse = async (req, res) => {
  try {
    const { title, day, teacherId, chapter, startTime, endTime } = req.body;
    console.log("req:", req.body);

    const teacher = await Users.findOne({ _id: teacherId, role: "teacher" });
    console.log("teacher => ", teacher);

    if (!teacher) {
      return res
        .status(400)
        .json({ msg: "Enseignant introuvable ou rôle incorrect" });
    }

    const course = new Course({
      title,
      day,
      startTime,
      endTime,
      teacherId: teacher._id,
      chapter,
    });

    await course.save();
    console.log("course =>", course);

    res.status(201).json({ msg: "Cours créé avec succès", data: course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur" });
  }
};

const getPlanning = async (req, res) => {
  try {
    const user = req.user; // récupéré par authMiddleware (id, role)

    let query = {};

    if (user.role === "teacher") {
      // Enseignant : seulement ses cours
      query.teacher = user.id;
    }
    // Manager et student voient tous les cours, donc query vide (tout)

    const courses = await Course.find(query)
      .populate("teacher", "name matricule email") // populate infos enseignant
      .select("title date chapters"); // champs à retourner

    res.json({ courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur" });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    // Vérifier si le cours existe
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ msg: "Cours non trouvé" });

    // Supprimer le cours
    await Course.findByIdAndDelete(courseId);

    res.json({ msg: "Cours supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur" });
  }
};

const generateCourses = asyncHandler(async (req, res) => {
  const { title, chapter, teacher, startDate, nbWeeks } = req.body;

  if (!title || !chapter || !teacher || !startDate || !nbWeeks) {
    return res.status(400).json({ message: "Champs requis manquants" });
  }

  const days = [1, 2, 3]; // Lundi, Mardi, Mercredi
  const startTimes = ["08:00", "10:00", "14:00"];
  const endTimes = ["10:00", "12:00", "16:00"];

  const baseDate = new Date(startDate);
  const coursesToCreate = [];

  for (let i = 0; i < nbWeeks; i++) {
    const weekDate = new Date(baseDate);
    weekDate.setDate(baseDate.getDate() + i * 7);

    const index = i % 3; // alterner sur 3 jours / horaires
    const courseDate = new Date(
      weekDate.setDate(weekDate.getDate() - weekDate.getDay() + days[index])
    );

    const course = {
      title,
      chapter,
      teacher,
      schedule: {
        date: courseDate,
        startTime: startTimes[index],
        endTime: endTimes[index],
      },
    };

    coursesToCreate.push(course);
  }

  const createdCourses = await Course.insertMany(coursesToCreate);
  res.status(201).json(createdCourses);
});

const getTeacherCourses = asyncHandler(async (req, res) => {
  const teacherId = req.user._id;

  const courses = await Course.find({ teacherId }).sort({
    day: 1,
    startHour: 1,
  });

  res.status(200).json(courses);
});

const getAllCourse = asyncHandler(async (req, res) => {
  try {
    const course = await Course.find().populate("teacherId").lean();
    if (course) {
      console.log("course:", course);
    }
    res.status(200).json({
      data: course,
      count: course.length,
    });
  } catch (error) {
    console.error(error);
  }
});

// const getAllCoursesWithStatus = asyncHandler(async (req, res) => {
//   const courses = await Course.find().lean();

//   const checkpointMap = {};
//   const checkpoints = await Check.find();
//   if (checkpoints) {
//     console.log("checkpoints =>", checkpoints);
//     checkpoints.forEach((cp) => {
//       checkpointMap[cp.courseId.toString()] = cp;
//     });
//     console.log("checkpointMap =>", checkpointMap);
//   }

//   // Facultatif : récupérer les noms des enseignants
//   const teachers = await Users.find({ role: "teacher" }).lean();
//   console.log("teachres =>", teachers);
//   const teacherMap = {};
//   teachers.forEach((t) => {
//     teacherMap[t._id.toString()] = t.firstName;
//   });
//   console.log("teacherMap =>", teacherMap);

//   const data = courses.map((course) => {
//     const cp = checkpointMap[course._id.toString()];
//     console.log("cp =>", cp);
//     return {
//       ...course,
//       teacherName: teacherMap[course.teacherId.toString()] || "Inconnu",
//       done: cp ? cp.done : false,
//       checkedAt: cp?.checkedAt || null,
//     };
//   });

//   res.status(200).json(data);
// });

const getAllCoursesWithStatus = asyncHandler(async (req, res) => {
  const courses = await Course.find().lean();
  const teachers = await Users.find({ role: "teacher" }).lean();
  const checkpoints = await Check.find().lean();

  const teacherMap = {};
  teachers.forEach((teacher) => {
    teacherMap[teacher._id.toString()] =
      teacher.firstName + " " + teacher.lastName;
    console.log("teacherMap =>", teacherMap);
  });

  const checkpointMap = {};
  checkpoints.forEach((cp) => {
    checkpointMap[cp.courseId.toString()] = cp;
  });

  const grouped = {};

  courses.forEach((course) => {
    const teacherId = course.teacherId?.toString() || "Inconnu";
    const teacherName = teacherMap[teacherId] || "Inconnu";
    const cp = checkpointMap[course._id.toString()];

    const courseWithStatus = {
      ...course,
      done: cp?.done || false,
      checkedAt: cp?.checkedAt || null,
    };

    if (!grouped[teacherId]) {
      grouped[teacherId] = {
        teacherId,
        teacherName,
        courses: [],
      };
    }

    grouped[teacherId].courses.push(courseWithStatus);
  });
  console.log("grouped =>", grouped);

  // Convertir l'objet en tableau pour le retour
  const result = Object.values(grouped);
  console.log("result =>", result);

  res.status(200).json(result);
});

const getAllPlannings = asyncHandler(async (req, res) => {
  const courses = await Course.find().lean().sort({ day: 1, startHour: 1 });

  // Ajouter le nom du professeur
  const teachers = await Users.find({ role: "teacher" }).lean();
  const teacherMap = {};
  teachers.forEach((t) => {
    teacherMap[t._id.toString()] = t.firstName + " " + t.lastName;
  });

  const formattedCourses = courses.map((course) => ({
    ...course,
    teacherName: teacherMap[course.teacherId?.toString()] || "Inconnu",
  }));

  res.status(200).json(formattedCourses);
});

const addCheckpoint = asyncHandler(async (req, res) => {
  const { courseId } = req.body;
  const teacherId = req.user._id; // supposé défini par authMiddleware

  // Vérifier que le cours existe
  const course = await Course.findById(courseId);
  if (!course) {
    res.status(404);
    throw new Error("Cours non trouvé");
  }

  // Vérifier que l'enseignant est bien celui du cours
  if (course.teacherId.toString() !== teacherId.toString()) {
    res.status(403);
    throw new Error("Vous n'êtes pas l'enseignant de ce cours");
  }

  // Vérifier si checkpoint déjà effectué pour ce cours et cet enseignant
  const existingCheckpoint = await Checkpoint.findOne({ courseId, teacherId });

  if (existingCheckpoint) {
    res.status(400);
    throw new Error("Checkpoint déjà effectué pour ce cours");
  }

  // Créer le checkpoint
  const checkpoint = new Checkpoint({
    courseId,
    teacherId,
    done: true,
    checkedAt: new Date(),
  });

  await checkpoint.save();

  res
    .status(201)
    .json({ message: "Checkpoint ajouté avec succès", checkpoint });
});

module.exports = { addCheckpoint };

module.exports = {
  deleteCourse,
  createCourse,
  getPlanning,
  addCheckpoint,
  generateCourses,
  getAllCourse,
  getAllCoursesWithStatus,
  getAllPlannings,
};
