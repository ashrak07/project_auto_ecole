import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import CreateUser from "../Components/User/CreateUser";
import CourseComponent from "../Components/Courses/CourseComponent";
import ScheduleComponent from "../Components/ScheduleComponent";
import TeacherCourses from "../Components/Teacher/TeacherCourses";
import ManagerCoursesOverview from "../Components/Courses/ManagerCoursesOverview";
import UserList from "../Components/User/UserList";
import Dashboard from "../Components/Dashboard";
import UserComponent from "../Components/User/UserComponent";
import AppRoutes from "../Router/router";
import { BrowserRouter, Outlet, Router, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  const goToClient = () => {
    navigate("/admin/client");
  };
  const goToCourse = () => {
    navigate("/admin/course");
  };
  const goToSchedule = () => {
    navigate("/admin/schedule");
  };
  const goToTeacher = () => {
    navigate("/admin/teacher");
  };
  const goToDashboard = () => {
    navigate("/admin/dashboard");
  };
  return (
    <div>
      <Grid
        container
        sx={{
          height: "100vh",
        }}
      >
        <Grid
          item
          className=""
          size={3}
          sx={{
            padding: 5,
            background: "#f50057",
            // background: "#f48fb1",
            //  background: "#f8bbd0",
            color: "white",
          }}
        >
          <Box>
            <Box
              sx={{
                marginBottom: 3,
                borderRadius: 5,
                padding: 1,
                ":hover": {
                  boxShadow: 3,
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate("/")}
            >
              <ArrowBackIosNewIcon sx={{ marginRight: 2 }} />
              Page d'accuel
            </Box>
            {/* <Box
              sx={{
                marginBottom: 3,
              }}
            >
              <Typography
                sx={{ color: "white", margin: 1.5 }}
                fontFamily="Montserrat"
                fontSize="large
              >
                Auto-école{" "}
                <span
                  style={{
                    color: "#f50057",
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  SMART{" "}
                </span>
              </Typography>
            </Box> */}

            <Box
              sx={{
                borderRadius: 2,
                padding: 1,
                ":hover": {
                  background: "#c2185b",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={goToDashboard}
            >
              <span>
                <DashboardIcon sx={{ marginRight: 1 }} />
                Dashboard
              </span>
            </Box>

            <Box
              sx={{
                borderRadius: 2,
                color: "white",
                padding: 1,
                ":hover": {
                  background: "#c2185b",
                  cursor: "pointer",
                },
              }}
              onClick={goToClient}
            >
              <span>
                <AssignmentIndIcon sx={{ marginRight: 1 }} />
                Espace client
              </span>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                padding: 1,
                ":hover": {
                  background: "#c2185b",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={goToCourse}
            >
              <span>
                <MenuBookIcon sx={{ marginRight: 1 }} />
                Espace cours
              </span>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                padding: 1,
                ":hover": {
                  background: "#c2185b",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={goToSchedule}
            >
              <span>
                <LibraryBooksIcon sx={{ marginRight: 1 }} />
                Emploi du temps
              </span>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                padding: 1,
                ":hover": {
                  background: "#c2185b",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={goToTeacher}
            >
              <span>
                <AccountCircleIcon sx={{ marginRight: 1 }} />
                Espace enseignant
              </span>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          className=""
          sx={{ background: "#fafafa", padding: 2 }}
          size={9}
        >
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
