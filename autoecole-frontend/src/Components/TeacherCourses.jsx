import React, { useState } from "react";
import {
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Button,
} from "@mui/material";

// Données statiques simulées pour un enseignant donné
const staticCourses = [
  {
    id: 1,
    title: "Code de la route",
    chapter: "Signalisation",
    day: "Lundi",
    startHour: "08:00",
    endHour: "09:30",
    prof: "Mr Andry",
  },
  {
    id: 2,
    title: "Code de la route",
    chapter: "Priorités",
    day: "Mardi",
    startHour: "10:00",
    endHour: "11:30",
    prof: "Mr Andry",
  },
  {
    id: 3,
    title: "Conduite",
    chapter: "Créneaux",
    day: "Jeudi",
    startHour: "14:00",
    endHour: "15:30",
    prof: "Mr Andry",
  },
];

// Simuler un enseignant connecté (ex: Mr Andry)
const currentTeacher = "Mr Andry";

const TeacherCourses = () => {
  const [checkedCourses, setCheckedCourses] = useState([]);

  const handleCheck = (courseId) => {
    setCheckedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const teacherCourses = staticCourses.filter(
    (course) => course.prof === currentTeacher
  );

  return (
    <Card className="p-6" sx={{ background: "#eceff1" }}>
      <Typography
        fontWeight="bold"
        fontFamily="Montserrat"
        sx={{ marginBlock: 2 }}
      >
        MES COURS A EFFECTUES
      </Typography>

      {teacherCourses.map((course) => (
        <Card key={course.id} elevation={0} className="p-4 mb-4">
          <Box className="flex justify-between items-center">
            <Box>
              <Typography variant="h6" className="" fontFamily="Poppins">
                {course.title} – {course.chapter}
              </Typography>
              <Typography
                variant="body2"
                fontFamily="Poppins"
                className="text-gray-600"
              >
                {course.day} | {course.startHour} - {course.endHour}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ borderRadius: 6, background: "#f48fb1" }}
            >
              Effectué
            </Button>
          </Box>
        </Card>
      ))}
    </Card>
  );
};

export default TeacherCourses;
