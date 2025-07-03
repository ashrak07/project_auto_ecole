import {
  Card,
  CardMedia,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          component="img"
          image="/pexels.jpg"
          sx={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            position: "relative",
          }}
        />
        <Card
          sx={{
            padding: 5,
            // width: "200px",
            // height: "200px",
            position: "absolute",
            top: "20%",
            left: "65%",
            borderRadius: 5,
          }}
        >
          <Box
            className=""
            sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}
          >
            <Typography>Login</Typography>
          </Box>
          <Box sx={{ width: 300, marginBlock: 2 }}>
            <Typography sx={{ fontFamily: "Poppins", fontSize: "small" }}>
              Entrer le Matricule
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              width={50}
            />
          </Box>
          <Box sx={{ width: 300, marginBlock: 2 }}>
            <Typography sx={{ fontFamily: "Poppins", fontSize: "small" }}>
              Entrer le mot de passe
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              width={50}
            />
          </Box>
          <Box sx={{ marginTop: 4 }}>
            <Button variant="contained" fullWidth>
              LOGIN
            </Button>
          </Box>
        </Card>
      </Card>
    </div>
  );
};

export default LoginPage;
