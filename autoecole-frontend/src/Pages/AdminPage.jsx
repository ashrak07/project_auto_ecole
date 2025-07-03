import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserComponent from "../Components/UserComponent";
import CourseComponent from "../Components/CourseComponent";
import ScheduleComponent from "../Components/ScheduleComponent";
import TeacherCourses from "../Components/TeacherCourses";
import ManagerCoursesOverview from "../Components/ManagerCoursesOverview";

const AdminPage = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          height: "100vh",
        }}
      >
        <Grid item className="" size={3} sx={{ padding: 5 }}>
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
        <Grid
          item
          className=""
          sx={{ background: "#f5f5f5", padding: 5 }}
          size={9}
        >
          {/* <UserComponent /> */}
          <CourseComponent />
          <ScheduleComponent />
          <TeacherCourses />
          <ManagerCoursesOverview />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
