import React from "react";
import { Card, Typography, Box } from "@mui/material";

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
      <Typography variant="h4" className="mb-6 text-center font-bold">
        Emploi du temps
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => {
          const dailyCourses = staticCourses.filter(
            (course) => course.day === day
          );

          return (
            <Card key={day} className="p-4">
              <Typography
                variant="h6"
                className="mb-2 font-semibold text-blue-600"
              >
                {day}
              </Typography>

              {dailyCourses.length > 0 ? (
                dailyCourses.map((course, index) => (
                  <Box
                    key={index}
                    className="bg-gray-100 p-3 rounded mb-2 shadow-sm"
                  >
                    <Typography className="font-bold">
                      {course.title}
                    </Typography>
                    <Typography className="text-sm italic text-gray-600">
                      {course.chapter}
                    </Typography>
                    <Typography className="text-sm">
                      {course.startHour} - {course.endHour}
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      Enseignant : {course.prof}
                    </Typography>
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
