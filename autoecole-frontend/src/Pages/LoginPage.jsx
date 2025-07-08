import {
  Card,
  CardMedia,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          component="img"
          image="/5.jpg"
          sx={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            position: "relative",
          }}
        />
        <Box
          sx={{
            background: "#1a237e",
            position: "absolute",
            height: "100vh",
            width: "100%",
            top: 0,
            opacity: 0.2,
          }}
        ></Box>
        <Box
          className=""
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            // margin: 3,
          }}
        >
          <Typography
            sx={{ color: "white", margin: 1.5 }}
            fontFamily="Montserrat"
            fontSize="large"
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
          <Typography
            onClick={goToHome}
            sx={{
              color: "white",
              margin: 1.5,
              ":hover": { color: "#f50057", cursor: "pointer" },
            }}
          >
            Page d'accueil
          </Typography>
        </Box>
        <Card
          sx={{
            padding: 5,
            position: "absolute",
            top: "20%",
            left: "65%",
            right: "auto",
            borderRadius: 5,
          }}
        >
          <Box
            className=""
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <Typography fontFamily="Montserrat" fontSize="large">
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
          </Box>
          <Box sx={{ width: 300, marginBlock: 2 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "small",
              }}
            >
              Entrer le Matricule
            </Typography>
            <TextField fullWidth variant="outlined" color="red" width={50} />
          </Box>
          <Box>
            <div>
              <Typography fontFamily="Poppins" fontSize="small  ">
                Entrer le mot de passe
              </Typography>
              <OutlinedInput
                fullWidth
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </Box>

          <Box sx={{ marginTop: 4 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "#f50057",
              }}
            >
              LOGIN
            </Button>
          </Box>
        </Card>
      </Card>
    </div>
  );
};

export default LoginPage;
