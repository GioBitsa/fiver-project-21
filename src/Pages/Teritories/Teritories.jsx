import React from "react";
import { Announcement, Faq, Navbar } from "../../Components";
import HeroImg from "../../Assets/heroImg.png";
import { Container, Stack, Typography, Box } from "@mui/material";
import { MainButton } from "../../Components/Common";

const Teritories = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography component="h1" variant="h1">
              Notre concept une <br />
              <span>solution</span> pour les territoires
            </Typography>
            <Typography component="p" variant="p">
              Du fait de la désertification médicale, les élus sont confrontés
              aux problèmes d’accessibibilité aux soins pour leurs administrés,
              en particulier pour les plus fragiles.
            </Typography>
            <Typography component="p" variant="p">
              Notre concept grâce aux différentes solutions mobiles qu’il
              propose, permet de répondre aux besoins de santé que se soit en
              milieux urbains, semi-urbains et même ruraux.
            </Typography>
            <Stack direction="row" spacing={2}>
              <MainButton text="Démarrer maintenant" />
              <MainButton text="Contacter l’équipe commerciale" />
            </Stack>
          </Box>
          <Box>
            <img src={HeroImg} alt="hero" />
          </Box>
        </Stack>
      </Container>
      <Faq />
    </>
  );
};

export default Teritories;
