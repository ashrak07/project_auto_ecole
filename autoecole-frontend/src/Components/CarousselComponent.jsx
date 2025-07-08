import {
  Box,
  Card,
  CardMedia,
  Typography,
  AppBar,
  Toolbar,
  Chip,
  Divider,
} from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";

const CarousselComponent = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Box className="b1">
        <Card
          className=""
          sx={{
            width: "100%",
            height: 450,
            overflow: "hidden",
            position: "relative",
            borderRadius: 0,
          }}
        >
          <CardMedia
            component="img"
            image="/personne-se-preparant-a-obtenir-un-permis-de-conduire.jpg"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              background: "#1a237e",
              position: "absolute",
              height: 600,
              width: "100%",
              top: 0,
              opacity: 0.6,
            }}
          ></Box>
          <AppBar elevation={0} sx={{ background: "none" }}>
            <Box
              sx={{
                background: "#1a237e",
                position: "absolute",
                height: "60px",
                width: "100%",
                top: 0,
                opacity: 0.8,
              }}
            ></Box>
            <Toolbar
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Box sx={{}}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ marginInline: 1 }}>Bon à savoir</Typography>
                <Typography sx={{ marginInline: 1 }}>Présentation</Typography>
                <Typography sx={{ marginInline: 1 }}>Programme</Typography>
                <Typography sx={{ marginInline: 1 }}>Permis</Typography>
                <AccountMenu />
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            // className="bg-black bg-opacity-50 text-white p-4 space-y-2"
            className=" text-white p-4  ml-4"
            sx={{
              position: "absolute",
              bottom: "10%",
              width: "100%",
            }}
          >
            <Box>
              <Typography fontSize={50} className="">
                AUTO ECOLE SMART
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={25} className="">
                L'ECOLE DE FORMATION A LA CONDUITE DE DIVERS VEHICULES ROUTIERS
                A MADAGASCAR.
              </Typography>
              <Typography
                fontSize={18}
                sx={{
                  marginTop: 1,
                }}
              >
                OUVERT DU LUNDI AU SAMEDI
              </Typography>
              <Divider
                sx={{
                  height: "5px",
                  width: "200px",
                  background: "white",
                  marginTop: "5px",
                }}
              ></Divider>
            </Box>
            <Box className="mt-15">
              <Chip
                variant="outlined"
                label="+26135423123"
                sx={{
                  color: "white",
                }}
              ></Chip>
              <Chip
                variant=""
                label="SE CONNECTER"
                sx={{
                  background: "#f50057",
                  marginLeft: 2,
                  color: "white",
                  ":hover": {
                    cursor: "pointer",
                    background: "white",
                    color: "#f50057",
                    fontWeight: "bold",
                    // letterSpacing: 1,
                  },
                }}
                onClick={handleLogin}
              ></Chip>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default CarousselComponent;
