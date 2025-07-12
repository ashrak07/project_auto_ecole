import React, { useEffect } from "react";
import { Card } from "@mui/material";
import { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { useDispatch } from "react-redux";
import { setSelectedCourse } from "../../Redux/courseSlice";
import { createCourse, getTeacherUser } from "../../Axios/API";
import Popover from "@mui/material/Popover";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const CreateCourse = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [success, setSuccess] = useState(true);

  const [professor, setProfessor] = useState([]);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [course, setCourse] = useState({
    title: "",
    chapter: "",
    day: "",
    startTime: "",
    endTime: "",
    teacherId: "",
  });

  const emptyCourse = () => {
    setCourse({
      title: "",
      chapter: "",
      day: "",
      startTime: "",
      endTime: "",
      teacherId: "",
    });
  };

  const fetchTeacherUser = async () => {
    const response = await getTeacherUser();
    if (response) {
      console.log("res ++", response);
      setProfessor(response.data.data);
    }
  };

  const fetchCreateCourse = async () => {
    try {
      console.log("course:", course);
      const response = await createCourse(course);
      if (response) {
        console.log("res =>", response);
        setAnchorEl(true);
        setSuccess(true);
      } else {
        setAnchorEl(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      emptyCourse();
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  const setCourses = () => {
    dispatch(setSelectedCourse(true));
  };

  useEffect(() => {
    fetchTeacherUser();
  }, []);

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
            name="teacherId"
            value={course.teacherId}
            onChange={handleChange}
            fullWidth
            sx={{ marginBlock: 1 }}
          >
            {professor.map((proffessor) => (
              <MenuItem key={proffessor.name} value={proffessor.id}>
                {proffessor.name}
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
              name="startTime"
              type="time"
              value={course.startTime}
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
              name="endTime"
              type="time"
              value={course.endTime}
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
          onClick={fetchCreateCourse}
        >
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={24} />
          ) : (
            "Créer cours"
          )}
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {success ? (
            <Typography sx={{ p: 2, color: "green" }}>
              <DoneIcon sx={{ color: "green", marginRight: 1 }} />
              Cours crée avec succès.
            </Typography>
          ) : (
            <Typography sx={{ p: 2, color: "red" }}>
              <ErrorOutlineIcon sx={{ color: "red", marginRight: 1 }} />
              Erreur lors de la création de cours.
            </Typography>
          )}
        </Popover>
      </Card>
    </div>
  );
};

export default CreateCourse;
