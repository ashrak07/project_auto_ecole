import React from "react";
import { Card, Typography, Box, Chip } from "@mui/material";

// Données statiques simulées
const allCourses = [
  {
    id: 1,
    title: "Code de la route",
    chapter: "Signalisation",
    day: "Lundi",
    startHour: "08:00",
    endHour: "09:30",
    prof: "Mr Andry",
    isDone: true,
  },
  {
    id: 2,
    title: "Code de la route",
    chapter: "Priorités",
    day: "Mardi",
    startHour: "10:00",
    endHour: "11:30",
    prof: "Mr Andry",
    isDone: false,
  },
  {
    id: 3,
    title: "Conduite",
    chapter: "Créneaux",
    day: "Jeudi",
    startHour: "14:00",
    endHour: "15:30",
    prof: "Mr Aina",
    isDone: true,
  },
  {
    id: 4,
    title: "Conduite",
    chapter: "Ronds-points",
    day: "Vendredi",
    startHour: "09:00",
    endHour: "10:30",
    prof: "Mr Aina",
    isDone: false,
  },
];

// Obtenir la liste unique des enseignants
const uniqueTeachers = [...new Set(allCourses.map((c) => c.prof))];

const ManagerCoursesOverview = () => {
  return (
    <div className="p-6">
      <Typography variant="h4" className="text-center font-bold mb-6">
        Suivi des cours par enseignant
      </Typography>

      {uniqueTeachers.map((teacher) => {
        const teacherCourses = allCourses.filter((c) => c.prof === teacher);

        return (
          <Card key={teacher} className="p-4 mb-6">
            <Typography
              variant="h6"
              className="mb-2 font-semibold text-blue-700"
            >
              Enseignant : {teacher}
            </Typography>

            {teacherCourses.map((course) => (
              <Box
                key={course.id}
                className="bg-gray-100 p-3 mb-2 rounded shadow-sm flex justify-between items-center"
              >
                <Box>
                  <Typography className="font-medium">
                    {course.title} – {course.chapter}
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                    {course.day} | {course.startHour} - {course.endHour}
                  </Typography>
                </Box>

                <Chip
                  label={course.isDone ? "Effectué" : "Non effectué"}
                  color={course.isDone ? "success" : "error"}
                />
              </Box>
            ))}
          </Card>
        );
      })}
    </div>
  );
};

export default ManagerCoursesOverview;
