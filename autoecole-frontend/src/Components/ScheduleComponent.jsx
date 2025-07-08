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
    <div className="p-3">
      <Card sx={{ padding: 3, marginBottom: 5 }} elevation={0}>
        <Typography fontWeight="bold" fontFamily="Montserrat">
          EMPLOI DE TEMPS
        </Typography>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => {
          const dailyCourses = staticCourses.filter(
            (course) => course.day === day
          );

          return (
            <Card key={day} className="p-4" sx={{ background: "#90caf9" }}>
              <Typography
                variant="h6"
                fontFamily="Poppins"
                sx={{ marginBottom: 2, color: "white" }}
              >
                {day}
              </Typography>

              {dailyCourses.length > 0 ? (
                dailyCourses.map((course, index) => (
                  <Box key={index} className="bg-white p-3 rounded mb-2 ">
                    <Typography
                      className=""
                      // fontWeight="bold"
                      fontFamily="Poppins"
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
                        sx={{ marginRight: "2px" }}
                      />
                      {course.startHour} - {course.endHour}
                    </Typography>
                    <Chip
                      label={course.prof}
                      size="small"
                      color="#f48fb1"
                      sx={{
                        fontFamily: "Poppins",
                        background: "#f48fb1",
                        color: "white",
                      }}
                    ></Chip>
                  </Box>
                ))
              ) : (
                <Typography sx={{ color: "white" }}>Aucun cours</Typography>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SheduleComponent;
