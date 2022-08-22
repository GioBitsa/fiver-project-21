import React from "react";
import { Announcement, Footer, Navbar } from "../../Components";
import { Box, Container, Stack } from "@mui/material";
import { HeroHeading, HeroParagraph } from "./Style";
import Earth from "../../Assets/Earth.png";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Home;
