import CreditCardIcon from "@mui/icons-material/CreditCard";
import React from "react";
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

const stats = [
  {
    label: "Total utilisateurs",
    value: 120,
    goal: 200,
    icon: <PeopleIcon fontSize="large" className="text-blue-500" />,
    color: "primary",
  },
  {
    label: "Enseignants",
    value: 15,
    goal: 30,
    icon: <SchoolIcon fontSize="large" className="text-green-500" />,
    color: "success",
  },
  {
    label: "Élèves",
    value: 95,
    goal: 150,
    icon: <PersonIcon fontSize="large" className="text-purple-500" />,
    color: "secondary",
  },
  {
    label: "Cours créés",
    value: 30,
    goal: 60,
    icon: <EventIcon fontSize="large" className="text-orange-500" />,
    color: "warning",
  },
];

const getProgress = (value, goal) => Math.min((value / goal) * 100, 100);

const Dashboard = () => {
  return (
    <Box className="p-5">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="font-bold"
      >
        Tableau de bord
      </Typography>
      <Grid container spacing={3} className="mt-4">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent>
                <Box className="flex flex-col items-center gap-2">
                  {item.icon}
                  <Typography variant="h6" className="text-center font-medium">
                    {item.label}
                  </Typography>
                  <Box position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate"
                      value={getProgress(item.value, item.goal)}
                      size={80}
                      thickness={5}
                      color={item.color}
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
                  <Typography className="mt-1 text-gray-600 text-sm">
                    {item.value} / {item.goal}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
