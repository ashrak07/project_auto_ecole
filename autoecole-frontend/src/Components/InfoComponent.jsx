import {
  Grid,
  Box,
  Card,
  Typography,
  Container,
  CardMedia,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const InfoComponent = () => {
  return (
    <div className="my-8">
      <Container>
        <Grid
          className=""
          sx={{
            justifyContent: "center",
          }}
          container
          spacing={2}
        >
          <Grid size={4} className="" item xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              className="bg-blue-200 p-4 text-center"
              sx={{ paddingInline: 5 }}
            >
              <span
                style={{
                  fontSize: "large",
                  // fontFamily: "Montserrat",
                }}
              >
                <LocationOnIcon fontSize="large" sx={{ paddingBottom: 1 }} />
                Adresse
              </span>
              <Typography
                sx={{
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: "small",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti suscipit consequuntur impedit provident similique
                accusamus!
              </Typography>
            </Card>
          </Grid>
          <Grid size={4} item xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              className="bg-green-200 p-4 text-center"
              sx={{ paddingInline: 5 }}
            >
              <span
                style={{
                  fontSize: "large",
                  // fontFamily: "Montserrat",
                }}
              >
                <PhoneIcon fontSize="large" sx={{ paddingBottom: 1 }} />
                Téléphone
              </span>
              <Typography
                sx={{ marginTop: 2 }}
                fontFamily="Poppins"
                fontSize="small"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus, aspernatur iure. Eaque sapiente voluptate cum.
              </Typography>
            </Card>
          </Grid>
          <Grid size={4} item xs={12} sm={12} md={4}>
            <Card
              elevation={0}
              className="bg-red-200 p-4 text-center"
              sx={{ paddingInline: 5 }}
            >
              <span
                style={{
                  fontSize: "large",
                  // fontFamily: "Montserrat",
                }}
              >
                <AccessTimeIcon fontSize="large" sx={{ paddingBottom: 1 }} />
                Horaire
              </span>
              <Typography
                sx={{
                  marginTop: 2,
                  fontFamily: "Poppins",
                  fontSize: "small",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque exercitationem quia, ut magnam facere et.*
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid className="" sx={{ marginBlock: 5 }} container spacing={5}>
          <Grid size={6} className="" item xs={12} sm={6} md={4}>
            <Box elevation={0} className="">
              <CardMedia
                component="img"
                image="/lkloeppel.jpg"
                sx={{
                  objectFit: "cover",
                  height: 150,
                  borderRadius: 2,
                }}
              />
            </Box>
          </Grid>
          <Grid size={6} item xs={12} sm={12} md={4} sx={{}}>
            <Box elevation={0} className=" p-5 ">
              <Typography sx={{}} fontFamily="Poppins">
                <DoneIcon sx={{ marginRight: 2, color: "#1976d2" }} />
                Monitrice competente et experimentée
              </Typography>
              <Typography fontFamily="Poppins">
                <DoneIcon sx={{ marginRight: 2, color: "#1976d2" }} />
                Horaires de formation adaptés à vos disponibilités
              </Typography>
              <Typography sx={{}} fontFamily="Poppins">
                <DoneIcon sx={{ marginRight: 2, color: "#1976d2" }} />
                Frais de formation abordable
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          marginTop: 5,
          background: "#1976d2",
          paddingBlock: 5,
        }}
      >
        <Container>
          <Grid className="" sx={{}} container spacing={5}>
            <Grid size={4} className="" item xs={12} sm={6} md={4}>
              <Card
                elevation={0}
                sx={{ borderRadius: 2, padding: 5, height: "250px" }}
                className="p-5 text-center "
              >
                <Box>
                  <Diversity3Icon
                    sx={{
                      color: "#1976d2",
                      fontSize: "32px",
                    }}
                  />
                  <Typography color="#1976d2">Equipe qualifiée</Typography>
                </Box>
                <Typography
                  sx={{ marginTop: 2 }}
                  fontFamily="Poppins"
                  fontSize="small"
                >
                  Obtenez votre permis grace à nos pedagogies, une équipe
                  experimenté se tient à votre disposition
                </Typography>
              </Card>
            </Grid>
            <Grid size={4} className="" item xs={12} sm={6} md={4}>
              <Card
                elevation={0}
                sx={{ borderRadius: 2, padding: 5, height: "250px" }}
                className="p-5 text-center "
              >
                <Box>
                  <LightbulbIcon
                    sx={{
                      color: "#1976d2",
                      fontSize: "32px",
                    }}
                  />
                  <Typography color="#1976d2">Formation adaptée</Typography>
                </Box>
                <Typography
                  sx={{ marginTop: 2 }}
                  fontFamily="Poppins"
                  fontSize="small"
                >
                  Nous vous guiderons tout au long de votre apprentissage pour
                  repondre au mieux aux besoin de chacun
                </Typography>
              </Card>
            </Grid>
            <Grid size={4} className="  " item xs={12} sm={6} md={4}>
              <Card
                elevation={0}
                sx={{ borderRadius: 2, padding: 5, height: "250px" }}
                className="p-5 text-center "
              >
                <Box>
                  <LibraryBooksIcon
                    sx={{
                      color: "#1976d2",
                      fontSize: "32px",
                    }}
                  />
                  <Typography color="#1976d2">Support à disposition</Typography>
                </Box>
                <Typography
                  sx={{ marginTop: 2 }}
                  fontFamily="Poppins"
                  fontSize="small"
                >
                  Vous trouverez sur place tous les livres dont vous aurez
                  besoin pour suivre les cours et reviser chez vous
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default InfoComponent;
