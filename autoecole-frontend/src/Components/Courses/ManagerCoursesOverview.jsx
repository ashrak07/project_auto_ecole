import React from "react";
import { Card, Typography, Button, Box, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setSelectedCourse } from "../../Redux/courseSlice";

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
  const dispatch = useDispatch();
  const setCourse = () => {
    dispatch(setSelectedCourse(false));
  };

  return (
    <Box className="" sx={{}} elevation={0}>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
          padding: 2,
        }}
      >
        <div>
          <Typography
            fontWeight="bold"
            fontFamily="Montserrat"
            sx={{ marginBlock: 2 }}
          >
            LISTE DES COURS
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              marginRight: 1,
              background: "#f50057",
            }}
            onClick={setCourse}
          >
            {" "}
            {/* <AddBoxIcon sx={{ marginRight: 1 }} /> */}
            <AddIcon sx={{ marginBottom: "1px", marginRight: 1 }} />
            créer cours
          </Button>
        </div>
      </Card>
      {uniqueTeachers.map((teacher) => {
        const teacherCourses = allCourses.filter((c) => c.prof === teacher);

        return (
          <Card
            key={teacher}
            elevation={0}
            sx={{ borderRadius: 2, padding: 3, marginBottom: 3 }}
          >
            <Typography sx={{ marginBottom: 1 }}>
              Enseignant : {teacher}
            </Typography>

            {teacherCourses.map((course) => (
              <Box
                key={course.id}
                sx={{ background: "#fafafa" }}
                className=" p-3 mb-2 rounded  flex justify-between items-center"
              >
                <Box>
                  <Typography fontSize="small" fontFamily="Poppins">
                    {course.title} – {course.chapter}
                  </Typography>
                  <Typography
                    fontFamily="Poppins"
                    className=" text-gray-600"
                    fontSize="small"
                  >
                    {course.day} | {course.startHour} - {course.endHour}
                  </Typography>
                </Box>

                <Chip
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "small",
                  }}
                  label={course.isDone ? "Effectué" : "Non effectué"}
                  color={course.isDone ? "success" : "error"}
                />
              </Box>
            ))}
          </Card>
        );
      })}
    </Box>
  );
};
export default ManagerCoursesOverview;
