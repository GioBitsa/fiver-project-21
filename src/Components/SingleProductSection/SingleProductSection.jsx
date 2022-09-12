import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import palette from "../../Shared/palette";
import Baterry from "../../Assets/Baterry.png";
import { MainButton } from "../Common";
import { MainImage, BackgroundImage } from "./Style";
import LeftSideCircle from "../../Assets/LeftSideCircle.png";
import RightSideCircle from "../../Assets/RightSideCircle.png";

const SingleProductSection = ({ align }) => {
  return (
    <Box
      sx={{
        backgroundColor: palette.navbarBackground,
        py: 5,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{
            xs: align === "left" ? "column-reverse" : "column",
            md: "row",
          }}
          spacing={3}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: { xs: palette.whiteText, md: palette.lightPrimary },
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "34px" },
                whiteSpace: "nowrap",
              }}
            >
              E-cabinet
            </Typography>
            <MainImage />
            <BackgroundImage
              src={align === "right" ? LeftSideCircle : RightSideCircle}
            />
          </Box>
          <Box sx={{ maxWidth: "700px", textAlign: { xs: "left", md: align } }}>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                color: palette.lightPrimary,
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Notre solution permet de pallier aux difficultés actuelles
              rencontrées lors de téléconsultations :
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                color: palette.blackText,
                opacity: 0.8,
                lineHeight: "2.2rem",
                my: 3,
              }}
            >
              Impossibilité de réaliser un examen clinique complet <br />
              Difficulté d’utilisation des outils technologiques par les
              patients, <br /> Réseaux et connectivités instables <br />
              Absence de contact humain et d’accompagnement.
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{
                color: palette.blackText,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              En plus des 12 dispositifs médicaux connectés, le e-cabinet
              dispose :
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                color: palette.blackText,
                opacity: 0.8,
                lineHeight: "2rem",
                my: 3,
              }}
            >
              d’un système de désinfection intégré, <br />
              d’un lecteur de carte vitale, <br /> d”un terminal de paiement,
              <br />
              d’une imprimante au format A4.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                color: palette.blackText,
                opacity: 0.8,
              }}
            >
              Le tout est connecté en 4G et 5G sur certaines zones, ce qui lui
              permet d’être rapide efficace dans le transfert de données et la
              télé consultation.
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent={{
                xs: "flex-start",
                md: align === "right" ? "flex-end" : "flex-start",
              }}
              sx={{ my: 3 }}
            >
              <img src={Baterry} alt="baterry" />
              <Typography
                component="h6"
                variant="h6"
                sx={{ color: palette.lightPrimary, fontSize: "18px" }}
              >
                Autonomie en fonctionnement : 8h
              </Typography>
            </Stack>
            <MainButton text="Découvrir nos offres et services" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleProductSection;
