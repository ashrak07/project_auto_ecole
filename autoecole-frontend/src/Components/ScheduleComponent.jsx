import React from "react";
import { Card, Typography, Box, Chip } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const staticCourses = [
  {
    title: "Code de la route",
    chapter: "Signalisation",
    day: "Lundi",
    startHour: "08:00",
    endHour: "09:30",
    prof: "Mr Andry",
  },
  {
    title: "Conduite",
    chapter: "Créneaux",
    day: "Mardi",
    startHour: "10:00",
    endHour: "11:30",
    prof: "Mr Aina",
  },
  {
    title: "Théorie",
    chapter: "Priorités",
    day: "Lundi",
    startHour: "14:00",
    endHour: "15:30",
    prof: "Mr Anja",
  },
  {
    title: "Conduite",
    chapter: "Ronds-points",
    day: "Mercredi",
    startHour: "09:00",
    endHour: "10:30",
    prof: "Mr Antso",
  },
];

const SheduleComponent = () => {
  return (
    <div className="p-6">
      <Typography
        fontWeight="bold"
        fontFamily="Montserrat"
        sx={{ marginBlock: 2 }}
      >
        EMPLOI DE TEMPS
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => {
          const dailyCourses = staticCourses.filter(
            (course) => course.day === day
          );

          return (
            <Card key={day} className="p-4" sx={{ background: "#bbdefb" }}>
              <Typography
                variant="h6"
                fontFamily="Poppins"
                className="mb-2  text-blue-600"
              >
                {day}
              </Typography>

              {dailyCourses.length > 0 ? (
                dailyCourses.map((course, index) => (
                  <Box key={index} className="bg-white p-3 rounded mb-2 ">
                    <Typography
                      className=""
                      fontWeight="bold"
                      fontFamily="Montserrat"
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      className=""
                      fontFamily="Poppins"
                      fontSize="small"
                    >
                      {course.chapter}
                    </Typography>
                    <Typography
                      className=""
                      fontFamily="Poppins"
                      fontSize="small"
                      sx={{ marginBlock: 1 }}
                    >
                      <AccessTimeFilledIcon
                        fontSize="x-small"
                        sx={{ marginRight: 1 }}
                      />
                      {course.startHour} - {course.endHour}
                    </Typography>
                    <Chip
                      label={course.prof}
                      size="small"
                      fontFamily="Poppins"
                      color="#f48fb1"
                      sx={{
                        background: "#f48fb1",
                        color: "white",
                      }}
                    ></Chip>
                  </Box>
                ))
              ) : (
                <Typography className="text-gray-500">Aucun cours</Typography>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SheduleComponent;
