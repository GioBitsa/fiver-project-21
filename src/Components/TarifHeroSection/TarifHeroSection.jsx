import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import palette from "../../Shared/palette";
import HighLight from "../../Assets/HighLight.png";
import FirstTarifHeroImage from "../../Assets/FirstTarifHeroImage.png";
import { Title, MyButton } from "./Style";
import { MdDone } from "react-icons/md";

const TarifHeroSection = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            display: { xs: "block", md: "none" },
            color: palette.primary,
            fontSize: "30px",
            fontWeight: "600",
            mb: 2,
          }}
        >
          MobilityCare
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: { xs: "26px", sm: "38px", md: "33px", lg: "50px" },
            fontWeight: "900",
            lineHeight: { xs: "50px", lg: "70px" },
            color: palette.black,
            mb: 3,
          }}
        >
          Nos tarifs et{" "}
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              color: palette.primary,
              mr: 2,
            }}
          >
            <img
              style={{
                left: "100%",
                transform: "translateX(-50%)",
                top: "-15px",
              }}
              className="highLight"
              src={HighLight}
              alt="highlight"
            />
            services
          </Box>
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{ maxWidth: "700px", color: palette.blackText, opacity: 0.8 }}
        >
          Nous proposons de la location ou de la vente de nos dispositifs afin
          de pouvoir vous proposez des solutions qui sont les plus adaptées a
          votre budget. <br /> De plus, vous pouvez bénéficiez ou souscrire à
          des services complémentaires pour que vos prestations soient optimales
          et ainsi ne vous préoccuper que de vos patients/résidents/habitants.
        </Typography>
      </Container>
      <Box sx={{ background: palette.linearVerticaly, py: 5 }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <img src={FirstTarifHeroImage} alt="tarif" />
            <Box sx={{ maxWidth: "350px" }}>
              <Title component="h2" variant="h2">
                E-cabinet
              </Title>
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.whiteText, opacity: 0.8, mt: 1, mb: 3 }}
              >
                E-cabinet complet avec l’ensemble des outils numériques et les
                périphériques nécessaires au bon fonctionnement du dispositif.
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                sx={{ color: palette.whiteText, opacity: 0.8, mt: 1, mb: 3 }}
              >
                Choisissez votre plan :
              </Typography>
              <Stack direction="row" spacing={3}>
                <MyButton>
                  <MdDone />
                  Location
                </MyButton>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default TarifHeroSection;
