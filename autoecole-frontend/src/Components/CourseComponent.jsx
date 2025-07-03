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

        //   onSubmit={handleSubmit}
        >
          <Typography variant="h5" className="mb-4 text-center font-bold">
            Créer un cours
          </Typography>

          <TextField
            label="Titre du cours"
            name="title"
            value={course.title}
            onChange={handleChange}
            fullWidth
            sx={{ marginBlock: 1 }}
          />

          <TextField
            label="Chapitre"
            name="chapter"
            value={course.chapter}
            onChange={handleChange}
            fullWidth
            sx={{ marginBlock: 1 }}
          />

          <TextField
            select
            label="Jour"
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

          <TextField
            select
            label="Professeur"
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

          <TextField
            label="Heure de début"
            name="startHour"
            type="time"
            value={course.startHour}
            onChange={handleChange}
            fullWidth
            sx={{ marginBlock: 1 }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Heure de fin"
            name="endHour"
            type="time"
            value={course.endHour}
            onChange={handleChange}
            fullWidth
            sx={{ marginBlock: 1 }}
            clearable
            InputLabelProps={{ shrink: true }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mt-4"
            sx={{ marginBlock: 1 }}
          >
            Créer
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default CourseComponent;
