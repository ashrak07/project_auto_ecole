import React from "react";
import { Card } from "@mui/material";
import { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { useDispatch } from "react-redux";
import { setSelectedCourse } from "../../Redux/courseSlice";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const Professors = ["Mr Andry", "Mr Aina", "Mr Anja", "Mr Antso"];

const CreateCourse = () => {
  const dispatch = useDispatch();

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
  const setCourses = () => {
    dispatch(setSelectedCourse(true));
  };

  const create = () => {
    console.log("course", course);
  };

  return (
    <div className="">
      <Card
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          marginBottom: 5,
        }}
      >
        <div>
          <Typography
            fontWeight="bold"
            fontFamily="Montserrat"
            sx={{ marginBlock: 2 }}
          >
            AJOUT D'UN COURS
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              marginRight: 1,
              background: "#f50057",
            }}
            onClick={setCourses}
          >
            <ListIcon sx={{ marginRight: 2 }} /> Liste des cours
          </Button>
        </div>
      </Card>
      <Card elevation={0} sx={{ width: "60ch", padding: 3 }} className="">
        <Box
          className=""
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
          }}
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
            />
          </div>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mt-4"
          sx={{ marginBlock: 1 }}
          onClick={create}
        >
          Créer cours
        </Button>
      </Card>
    </div>
  );
};

export default CreateCourse;
