import React from "react";
import {
  Announcement,
  Faq,
  Footer,
  Navbar,
  HeroImageContainer,
  VideoPreview,
} from "../../Components";
import StructureHeroImage from "../../Assets/StructureHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box } from "@mui/material";
import { MainButton, OutlineMainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import StructureVideoPreview from "../../Assets/StructureVideoPreview.png";

const Structure = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
        >
          <Box>
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
              Une{" "}
              <Box
                sx={{
                  display: "inline-block",
                  position: "relative",
                  color: palette.primary,
                  mr: 2,
                }}
              >
                <img className="highLight" src={HighLight} alt="highlight" />
                solution
              </Box>
              Pour Votre <br />
              <span style={{ fontWeight: "bold", color: palette.primary }}>
                Structure De Soins
              </span>
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              Les structures de santé n’ont pas nécessairement un médecin
              disponible 24h/24, ni même parfois d’infirmier(e) ce qui parfois
              met le personnel et les résidents dans des situations où la seule
              solution possible est un transfert vers une structure hospitalière
              et implique : stress, tension, perte de temps, difficulté de prise
              en charge des autres résidents..
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: "50px", display: { xs: "none", md: "flex" } }}
            >
              <MainButton text="Decouvrez nos tarifs" />
              <OutlineMainButton text="Contacter l’équipe commerciale" />
            </Stack>
          </Box>
          <Stack alignItems="center" spacing={3}>
            <HeroImageContainer
              main={StructureHeroImage}
              background={HeroImageBackground}
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MainButton text="Decouvrez nos tarifs" />
              <OutlineMainButton text="Contacter l’équipe commerciale" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box sx={{ backgroundColor: palette.navbarBackground, pb: "50px" }}>
        <VideoPreview
          preview={StructureVideoPreview}
          title="Découvrez un cas d’usage"
          desc="Regarder notre vidéo et vous comprendrez aisément l’interet d’un
              tel dispositif dans la pratique quotidienne de votre structure."
          button="Voir la vidéo"
        />
        <Faq />
      </Box>
      <Footer />
    </>
  );
};

export default Structure;
