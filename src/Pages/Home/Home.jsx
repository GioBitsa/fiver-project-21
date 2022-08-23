import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  SliderComponent,
  CabinetComponent,
} from "../../Components";
import { Box, Container, Stack, Typography } from "@mui/material";
import { HeroHeading, HeroParagraph, MyVideoPreview } from "./Style";
import Earth from "../../Assets/Earth.png";
import HomeVideoPreview from "../../Assets/HomeVideoPreview.png";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";

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
      <Footer />
    </>
  );
};

export default Home;
