import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import palette from "../../Shared/palette";
import { Frame, MainLogoContainer, Features, DetailsContainer } from "./Style";
import MainLogo from "../../Assets/MainLogo.png";
import EcoSystemImage1 from "../../Assets/EcoSystemImage (1).png";
import EcoSystemImage2 from "../../Assets/EcoSystemImage (2).png";
import EcoSystemImage3 from "../../Assets/EcoSystemImage (3).png";
import EcoSystemImage4 from "../../Assets/EcoSystemImage (4).png";
import EcoSystemImage5 from "../../Assets/EcoSystemImage (5).png";
import { OutlineMainButton } from "../Common";

const EcoSystemImageArray = [
  {
    src: EcoSystemImage4,
    text: "Assistant(e)",
  },
  {
    src: EcoSystemImage2,
    text: "Structure de santé",
  },
  {
    src: EcoSystemImage5,
    text: "Médecin",
  },
  {
    src: EcoSystemImage3,
    text: "Territoire/ Collectivité",
  },
  {
    src: EcoSystemImage1,
    text: "Secours/ Transports",
  },
];

const DetailsContainerArray = [
  {
    header: "Vous êtes un médecin",
  },
  {
    header: "Vous êtes un patient",
    className: "active",
  },
  {
    header: "Vous êtes un(e) assistant(e)",
  },
  {
    header: "Vous êtes un territoire/une collectivité",
  },
  {
    header: "Vous êtes une structure de santé",
  },
];

const EcosystemComponent = () => {
  return (
    <Box
      sx={{
        my: "50px",
        py: 5,
        position: "relative",
        height: { xs: "1300px", sm: "1500px", md: "auto" },
      }}
    >
      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "30px" },
            fontWeight: "bold",
            color: palette.primary,
            mb: 2,
          }}
        >
          Notre écosystème
        </Typography>
        <Typography sx={{ color: palette.blackText }}>
          Sélectionnez le profil qui vous convient
        </Typography>
        <Frame>
          <MainLogoContainer>
            <img src={MainLogo} alt="logo" />
            <Typography component="h6" variant="h6">
              Patient
            </Typography>
          </MainLogoContainer>
          {EcoSystemImageArray?.map((item, index) => (
            <Features key={index}>
              <img src={item.src} alt="logo" />
              <Typography component="p" variant="p">
                {item.text}
              </Typography>
            </Features>
          ))}
        </Frame>
      </Container>
      <Box
        sx={{
          width: "100%",
          borderRadius: "12px",
          py: 3,
          backgroundColor: {
            xs: palette.navbarBackground,
            md: palette.whiteText,
          },
          position: { xs: "relative", md: "absolute" },
          top: { xs: "-135px", sm: "-200px", md: "initial" },
          bottom: { xs: "initial", md: "15px" },
        }}
      >
        <Container maxWidth="lg">
          <DetailsContainer container>
            {DetailsContainerArray?.map((item, index) => (
              <Grid
                className={item.className}
                key={index}
                item
                xs={12}
                md={2.4}
              >
                <Box>
                  <span>{index + 1}</span>
                  <Typography component="h6" variant="h6">
                    {item.header}
                  </Typography>
                </Box>
                <OutlineMainButton text="en savoir plus" />
              </Grid>
            ))}
          </DetailsContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default EcosystemComponent;
