import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const PermisComponent = () => {
  return (
    <Box sx={{ background: "#1976d2" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBlock: 3,
        }}
      >
        <Typography color="white" letterSpacing={2}>
          PERMIS PROPOSE
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={1} sx={{ paddingBlock: 2 }}>
          <Grid item size={6}>
            <Grid container spacing={1}>
              <Grid item size={6} className="text-center">
                <Card
                  sx={{
                    background: "transparent",
                    border: "white solid 1px",
                    color: "white",
                    padding: 2,
                  }}
                >
                  <TwoWheelerIcon fontSize="large" />
                  <Typography sx={{ marginTop: 1 }}>
                    Pour les deux roues, nous proposons le permis A et A'
                  </Typography>
                </Card>
              </Grid>
              <Grid item size={6} className="text-center">
                <Card
                  sx={{
                    background: "transparent",
                    border: "white solid 1px",
                    color: "white",
                    padding: 2,
                  }}
                >
                  <TimeToLeaveIcon fontSize="large" />
                  <Typography sx={{ marginTop: 1 }}>
                    Le permis B pour conduire les voitures legers
                  </Typography>
                </Card>
              </Grid>
              <Grid item size={6} className="text-center">
                <Card
                  sx={{
                    background: "transparent",
                    border: "white solid 1px",
                    color: "white",
                    padding: 2,
                  }}
                >
                  <DirectionsBusIcon fontSize="large" />
                  <Typography sx={{ marginTop: 1 }}>
                    Pour conduire les transports en commun, il faut le permis D
                  </Typography>
                </Card>
              </Grid>
              <Grid item size={6} className="text-center">
                <Card
                  sx={{
                    background: "transparent",
                    border: "white solid 1px",
                    color: "white",
                    padding: 2,
                  }}
                >
                  <LocalShippingIcon fontSize="large" />
                  <Typography sx={{ marginTop: 1 }}>
                    Le transport de marchandises nécessite le permis C ou E
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item size={6}>
            2
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PermisComponent;
