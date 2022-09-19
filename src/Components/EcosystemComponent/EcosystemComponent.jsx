import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import palette from "../../Shared/palette";
import {
  Frame,
  MainLogoContainer,
  Features,
  DetailsContainer,
  ImageContainer,
  MainImageContainer,
} from "./Style";
import MainLogo from "../../Assets/Icons/MainLogo.png";
import EcoSystemImage1 from "../../Assets/Icons/EcoSystemImage (1).png";
import EcoSystemImage2 from "../../Assets/Icons/EcoSystemImage (2).png";
import EcoSystemImage3 from "../../Assets/Icons/EcoSystemImage (3).png";
import EcoSystemImage4 from "../../Assets/Icons/EcoSystemImage (4).png";
import EcoSystemImage5 from "../../Assets/Icons/EcoSystemImage (5).png";
import { OutlineMainButton } from "../Common";

const EcoSystemImageArray = [
  {
    src: EcoSystemImage4,
    text: "Assistant(e)",
    activeCard: 3,
  },
  {
    src: EcoSystemImage2,
    text: "Structure de santé",
    activeCard: 5,
  },
  {
    src: EcoSystemImage5,
    text: "Médecin",
    activeCard: 1,
  },
  {
    src: EcoSystemImage3,
    text: "Territoire/ Collectivité",
    activeCard: 4,
  },
  {
    src: EcoSystemImage1,
    text: "Secours/ Transports",
    activeCard: null,
  },
];

const DetailsContainerArray = [
  {
    header: "Vous êtes un médecin",
  },
  {
    header: "Vous êtes un patient",
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
  const [mainContent, setMainContent] = useState({
    src: MainLogo,
    text: "Patient",
    activeCard: 2,
  });

  const [active, setActive] = useState(2);

  const [myEcoSystemImageArray, setMyEcoSystemImageArray] =
    useState(EcoSystemImageArray);

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
            <MainImageContainer>
              <img src={mainContent.src} alt="logo" />
            </MainImageContainer>
            <Typography component="h6" variant="h6">
              {mainContent.text}
            </Typography>
          </MainLogoContainer>
          {myEcoSystemImageArray?.map((item, index) => (
            <Features
              key={index}
              onClick={() => {
                setMainContent({
                  src: item.src,
                  text: item.text,
                  activeCard: item.activeCard,
                });
                myEcoSystemImageArray[index] = mainContent;
                setMyEcoSystemImageArray(myEcoSystemImageArray);
                setActive(item.activeCard);
              }}
            >
              <ImageContainer>
                <img src={item.src} alt="logo" />
              </ImageContainer>
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
                className={active === index + 1 ? "active" : ""}
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
