import React, { useEffect, useState } from "react";
import { Card, Typography, Box, Chip } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { getPanning } from "../Axios/API";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const SheduleComponent = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourse = async () => {
    try {
      const response = await getPanning();
      if (response) {
        console.log("++", response);
        setCourses(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <div className="p-3">
      <Card sx={{ padding: 3, marginBottom: 5 }} elevation={0}>
        <Typography variant="body-1">EMPLOI DE TEMPS</Typography>
        <Typography variant="h3">EMPLOI DE TEMPS</Typography>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => {
          const dailyCourses = courses.filter((course) => course.day === day);

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
                      {course.startTime} - {course.endTime}
                    </Typography>
                    <Chip
                      label={course.teacherName}
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
