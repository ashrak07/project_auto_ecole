import { Card } from "@mui/material";
import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const Professors = ["Mr Andry", "Mr Aina", "Mr Anja", "Mr Antso"];

const CourseComponent = () => {
  const [course, setCourse] = useState({
    title: "",
    chapter: "",
    day: "",
    prof: "",
    startHour: "",
    endHour: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Card elevation={0} sx={{ padding: 5 }}>
        <Box
          sx={{ width: "60ch" }}
          //   onSubmit={handleSubmit}
        >
          <Typography
            fontWeight="bold"
            fontFamily="Montserrat"
            sx={{ marginBlock: 2 }}
          >
            CREER COURS
          </Typography>
          <Box
            className=""
            sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
          >
            <div style={{ width: "50%" }}>
              <Typography fontFamily="Poppins" fontSize="small  ">
                Titre du cours
              </Typography>
              <TextField
                name="title"
                value={course.title}
                onChange={handleChange}
                fullWidth
                sx={{ marginBlock: 1 }}
              />
            </div>
            <div style={{ width: "50%" }}>
              <Typography fontFamily="Poppins" fontSize="small  ">
                Chapitre
              </Typography>
              <TextField
                name="chapter"
                value={course.chapter}
                onChange={handleChange}
                fullWidth
                sx={{ marginBlock: 1 }}
              />
            </div>
          </Box>
          <div>
            <Typography fontFamily="Poppins" fontSize="small  ">
              Jour
            </Typography>
            <TextField
              select
              name="day"
              value={course.day}
              onChange={handleChange}
              fullWidth
              sx={{ marginBlock: 1 }}
            >
              {days.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Typography fontFamily="Poppins" fontSize="small  ">
              Professeur
            </Typography>
            <TextField
              select
              name="prof"
              value={course.prof}
              onChange={handleChange}
              fullWidth
              sx={{ marginBlock: 1 }}
            >
              {Professors.map((Proffessor) => (
                <MenuItem key={Proffessor} value={Proffessor}>
                  {Proffessor}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Box
            className=""
            sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
          >
            <div style={{ width: "50%" }}>
              <Typography fontFamily="Poppins" fontSize="small  ">
                Heure de début
              </Typography>
              <TextField
                name="startHour"
                type="time"
                value={course.startHour}
                onChange={handleChange}
                fullWidth
                sx={{ marginBlock: 1 }}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div style={{ width: "50%" }}>
              <Typography fontFamily="Poppins" fontSize="small  ">
                Heure de fin
              </Typography>
              <TextField
                name="endHour"
                type="time"
                value={course.endHour}
                onChange={handleChange}
                fullWidth
                sx={{ marginBlock: 1 }}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mt-4"
            sx={{ marginBlock: 1 }}
          >
            Créer cours
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default CourseComponent;
