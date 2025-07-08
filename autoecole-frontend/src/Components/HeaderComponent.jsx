import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const HeaderComponent = () => {
  return (
    <div>
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
            }}
          >
            <Typography sx={{ marginInline: 1 }}>Bon à savoir</Typography>
            <Typography sx={{ marginInline: 1 }}>Présentation</Typography>
            <Typography sx={{ marginInline: 1 }}>Programme</Typography>
            <Typography sx={{ marginInline: 1 }}>Permis</Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderComponent;
