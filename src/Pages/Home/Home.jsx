import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  SliderComponent,
  CabinetComponent,
} from "../../Components";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { HeroHeading, HeroParagraph, MyVideoPreview } from "./Style";
import Earth from "../../Assets/Earth.png";
import HomeVideoPreview from "../../Assets/HomeVideoPreview.png";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import HomeGridImage1 from "../../Assets/HomeGridImage (1).png";
import HomeGridImage2 from "../../Assets/HomeGridImage (2).png";
import HomeGridImage3 from "../../Assets/HomeGridImage (3).png";
import HomeGridImage4 from "../../Assets/HomeGridImage (4).png";
import HomeGridImage5 from "../../Assets/HomeGridImage (5).png";
import HomeGridImage6 from "../../Assets/HomeGridImage (6).png";
import HomeGridImage7 from "../../Assets/HomeGridImage (7).png";
import HomeGridImage8 from "../../Assets/HomeGridImage (8).png";

const HomeGridImageArray = [
  HomeGridImage2,
  HomeGridImage5,
  HomeGridImage6,
  HomeGridImage4,
  HomeGridImage7,
  HomeGridImage1,
  HomeGridImage3,
  HomeGridImage8,
];

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      {/* Hero section */}
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
          sx={{ my: "50px" }}
        >
          <Box>
            <HeroHeading component="h1" variant="h1">
              <span>MobilityCare</span> <br />
              La télémédecine <br /> nouvelle <strong>génération</strong>
            </HeroHeading>
            <HeroParagraph>
              Première solution de télémédecine assistée utilisant un cabinet
              médicale 100% nomade.. Notre concept place le patient dans une
              prise en charge plus humaine et efficiente. Notre plateforme
              facile, rapide et 100% en ligne permet à tous les acteurs de jouer
              un rôle dans ce nouvel écosystème.
            </HeroParagraph>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              style={{ maxWidth: "400px", width: "100%" }}
              src={Earth}
              alt="earth"
            />
          </Box>
        </Stack>
      </Container>
      {/* End of Hero section */}
      {/* Video section */}
      <Box sx={{ background: palette.linearHorizontaly, py: "50px" }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginBottom: { xs: 1, md: 3 },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ maxWidth: { xs: "100%", md: "500px" } }}>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  color: palette.whiteText,
                  fontSize: { xs: "24px", sm: "34px" },
                  fontWeight: "bold",
                }}
              >
                Notre concept <br /> unique
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ mt: 4, fontSize: { xs: "14px", sm: "16px" } }}
              >
                Notre E-cabinet dispose de l’ensemble des outils nécessaires au
                bon déroulement d’une consultation médicale.
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ mt: 2, fontSize: { xs: "14px", sm: "16px" } }}
              >
                Étant couplé à la présence d’une assistance humaine, il permet
                de réaliser plus de 90 % des actes habituellement faits en
                cabinet.
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ mt: 2, fontSize: { xs: "14px", sm: "16px" } }}
              >
                Ce concept fiable permet un accès aux soins partout et pour
                tous.
              </Typography>
            </Box>
            <Box>
              <MyVideoPreview src={HomeVideoPreview} alt="video" />
            </Box>
          </Stack>
          <MainButton
            sx={{
              display: { xs: "block", md: "inline-flex" },
              margin: { xs: "0 auto" },
            }}
            text="Envie d’en savoir plus ?"
          />
        </Container>
      </Box>
      {/* End of Video section */}
      <SliderComponent />
      <CabinetComponent />
      <Box sx={{ backgroundColor: palette.navbarBackground, py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontSize: { xs: "18px", sm: "24px", md: "30px" },
              textAlign: "center",
              fontWeight: "bold",
              color: palette.primary,
              mb: 5,
            }}
          >
            Vos données de santé sécurisées
          </Typography>
          <Grid container spacing={2}>
            {HomeGridImageArray.map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ maxWidth: "150px", width: "100%" }}
                  src={item}
                  alt="logo"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
