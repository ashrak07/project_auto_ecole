import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreateUser from "../Components/User/CreateUser";
import CourseComponent from "../Components/CourseComponent";
import ScheduleComponent from "../Components/ScheduleComponent";
import TeacherCourses from "../Components/TeacherCourses";
import ManagerCoursesOverview from "../Components/ManagerCoursesOverview";
import UserList from "../Components/User/UserList";
import Dashboard from "../Components/Dashboard";

const AdminPage = () => {
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
          sx={{ padding: 5, background: "#f48fb1", color: "white" }}
        >
          <Box>
            <Box
              sx={{
                borderRadius: 2,
                padding: 1,
                ":hover": {
                  background: "#f50057",
                  color: "white",
                  cursor: "pointer",
                },
              }}
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
                  background: "#f50057",
                  color: "white",
                  cursor: "pointer",
                },
              }}
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
                  background: "#f50057",
                  color: "white",
                  cursor: "pointer",
                },
              }}
            >
              <span>
                <DashboardIcon sx={{ marginRight: 1 }} />
                Dashboard
              </span>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                padding: 1,
                ":hover": {
                  background: "#f50057",
                  color: "white",
                  cursor: "pointer",
                },
              }}
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
                  background: "#f50057",
                  color: "white",
                  cursor: "pointer",
                },
              }}
            >
              <span>
                <AssignmentIndIcon sx={{ marginRight: 1 }} />
                Espace client
              </span>
            </Box>
          </Box>
        </Grid>
        <Grid item className="" sx={{ background: "", padding: 2 }} size={9}>
          {/* <CreateUser /> */}

          {/* <CourseComponent /> */}
          {/* <ScheduleComponent /> */}
          {/* <TeacherCourses /> */}
          {/* <ManagerCoursesOverview /> */}
          {/* <UserList /> */}
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
