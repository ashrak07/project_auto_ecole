import { Container, Grid, Card, Box, Typography } from "@mui/material";
import React from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const ProgrammeComponent = () => {
  return (
    <div className="my-5">
      <Container>
        <Grid className="" sx={{}} container spacing={2}>
          <Grid size={4} className="b4" item xs={12} sm={6} md={4}>
            <Card elevation={0} className="p-5" sx={{ height: "240px" }}>
              <Box>
                <span style={{ color: "#f50057", fontWeight: "bold" }}>
                  <AssignmentTurnedInIcon sx={{ marginRight: 1 }} />
                  Cours de code
                </span>
              </Box>
              <Typography
                sx={{ marginTop: 2 }}
                fontFamily="Poppins"
                fontSize="small"
              >
                L'apprentissage du code de la route est reparti sur 10 cours
                d'environ 2h. Vous pouvez y assister en presentiel en fonction
                de votre disponibilite ou apprendre chez vous avec les supports
                de cours prevu par l'etabissement
              </Typography>
            </Card>
          </Grid>
          <Grid size={4} className="b4" item xs={12} sm={6} md={4}>
            <Card elevation={0} className="p-5 " sx={{ height: "240px" }}>
              <Box>
                <span style={{ color: "#f50057", fontWeight: "bold" }}>
                  <AssignmentTurnedInIcon sx={{ marginRight: 1 }} />
                  Cours de conduite
                </span>
              </Box>
              <Typography
                sx={{ marginTop: 2 }}
                fontFamily="Poppins"
                fontSize="small"
              >
                Les cours de conduites au sein de l'auto ecole sont adaptés au
                niveau et au besoin de chacun de chacun. Pour les etudiants,
                nous avons mis un dispositif qui leur permet de bien assimiler
                les bases avant de prendre la route
              </Typography>
            </Card>
          </Grid>
          <Grid size={4} className="b4" item xs={12} sm={6} md={4}>
            <Card elevation={0} className="p-5" sx={{ height: "240px" }}>
              <Box>
                <span style={{ color: "#f50057", fontWeight: "bold" }}>
                  <AssignmentTurnedInIcon sx={{ marginRight: 1 }} />
                  Perfectionnement
                </span>
              </Box>
              <Typography
                sx={{ marginTop: 2 }}
                fontFamily="Poppins"
                fontSize="small"
              >
                Pour ceux qui n'ont pas conduit depuis un moment et ne se
                sentent pas en confiance pour prendre le volant. Nous proposons
                des cours de perfectionnement à la conduite et donnons aussi
                l'acces à tous les cours de code
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProgrammeComponent;
