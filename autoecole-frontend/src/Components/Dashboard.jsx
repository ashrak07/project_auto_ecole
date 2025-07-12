import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import { dashboard } from "../Axios/API";

const getProgress = (value, goal) => Math.min((value / goal) * 100, 100);

const Dashboard = () => {
  const [teacher, setTeacher] = useState();
  const [student, setStudent] = useState();
  const [user, setUser] = useState();

  const fetchDashboard = async () => {
    const response = await dashboard();
    console.log("res =>", response);
    setTeacher(response.teacher);
    setStudent(response.student);
    setUser(response.user);
  };

  useEffect(() => {
    fetchDashboard(), [];
  });

  const stats = [
    {
      label: "Total utilisateurs",
      value: user,
      goal: user,
      icon: (
        <PeopleIcon
          fontSize="large"
          sx={{
            color: "#f50057",
          }}
        />
      ),
      color: "#f50057",
    },
    {
      label: "Enseignants",
      value: teacher,
      goal: user,
      icon: (
        <SchoolIcon
          fontSize="large"
          sx={{
            color: "#7b1fa2",
          }}
        />
      ),
      color: "#7b1fa2",
    },
    {
      label: "Élèves",
      value: student,
      goal: user,
      icon: <PersonIcon fontSize="large" sx={{ color: "#00796b" }} />,
      color: "#00796b",
    },
    {
      label: "Cours créés",
      value: 30,
      goal: 60,
      icon: <EventIcon fontSize="large" sx={{ color: "#388e3c" }} />,
      color: "#388e3c",
    },
  ];

  return (
    <Box className="p-3">
      <Card
        elevation={0}
        className=""
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <div>
          <Typography
            fontWeight="bold"
            fontFamily="Montserrat"
            sx={{ marginBlock: 2 }}
          >
            TABLEAU DE BORD
          </Typography>
        </div>
      </Card>
      <Grid container spacing={3} className="mt-4">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <div className="transition-all duration-300">
              <Card
                elevation={0}
                sx={{
                  padding: 3,
                  borderRadius: 5,
                  ":hover": {
                    boxShadow: 3,
                    cursor: "pointer",
                  },
                }}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="text-center">
                    <div className="flex">
                      <div className="mr-2">{item.icon}</div>
                      <Typography
                        variant="h6"
                        className="text-center font-medium"
                      >
                        {item.label}
                      </Typography>
                    </div>
                    <Typography
                      variant="h5"
                      className="mt-1 text-gray-600 text-sm"
                    >
                      {item.value}
                    </Typography>
                  </div>
                  <Box position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate"
                      value={getProgress(item.value, item.goal)}
                      size={80}
                      thickness={5}
                      color={item.color}
                      sx={{ color: item.color }}
                    />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                      >
                        {`${Math.round(getProgress(item.value, item.goal))}%`}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
