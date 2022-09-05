import React from "react";
import {
  Announcement,
  Faq,
  Footer,
  Navbar,
  HeroImageContainer,
  VideoPreview,
} from "../../Components";
import StructureHeroImage from "../../Assets/Structure/StructureHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import { MainButton, OutlineMainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import StructureVideoPreview from "../../Assets/Structure/StructureVideoPreview.png";
import { MyImageBox, GridTitle, MyGridItem } from "./Style";
import StructureSvg1 from "../../Assets/Structure/StructureSvg (1).png";
import StructureSvg2 from "../../Assets/Structure/StructureSvg (2).png";
import StructureSvg3 from "../../Assets/Structure/StructureSvg (3).png";
import StructureSvg4 from "../../Assets/Structure/StructureSvg (4).png";
import StructureSvg5 from "../../Assets/Structure/StructureSvg (5).png";
import StructureSvg6 from "../../Assets/Structure/StructureSvg (6).png";
import StructureSvg7 from "../../Assets/Structure/StructureSvg (7).png";

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
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: palette.navbarBackground, py: 5 }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
            textAlign: { xs: "left", md: "center" },
          }}
        >
          Les atouts pour votre stucture de santé
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.black,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            mt: 2,
            mb: 4,
            textAlign: { xs: "left", md: "center" },
          }}
        >
          Une solution pour vos résidents et patients qui permettra d’éviter des
          transferts inutiles, d’optimiser les délais de prises en charge et
          d’apporter un confort à chacun.
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
        >
          <MyGridItem item xs={12} md={3}>
            <MyImageBox>
              <img src={StructureSvg1} alt="mobile" />
            </MyImageBox>
            <GridTitle>Dispositif mobile</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Notre E-cabinet peut être déplacé aisement grâce a ces 4 roues
              auprès de chaque résident dans votre structure.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={3}>
            <MyImageBox>
              <img src={StructureSvg2} alt="team" />
            </MyImageBox>
            <GridTitle>Team</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              En tant qu’administrateur vous avez la possibilité de créer et
              gérer des groupes selon les différents roulements effectifs dans
              votre établissement.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={3}>
            <MyImageBox>
              <img src={StructureSvg3} alt="budget" />
            </MyImageBox>
            <GridTitle>Budget respecté</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Pas de mauvaise surprise, tout est compris dans le prix de la
              location.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={3}>
            <MyImageBox>
              <img src={StructureSvg4} alt="list" />
            </MyImageBox>
            <GridTitle>Revalorisation</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Votre personnel acquiert des nouvelles compétences grâce à la
              formation ce qui lui permet d’être plus impliqué dans les soins
              qu’il prodigue.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={StructureSvg5} alt="cross" />
            </MyImageBox>
            <GridTitle>Sans pré-requis d’installation</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Notre E-cabinet est nomade, il n’a pas besoin d’installation
              technique particulière pour sa mise en place dans votre structure.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={StructureSvg6} alt="capitaliser" />
            </MyImageBox>
            <GridTitle>Capitaliser</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Vous n’avez pas a recruter du personnel supplémentaire, vous
              capitaliser sur les ressources internes tels que les
              infirmièr(e)s, aides soignant(e)s et médecin(s) de votre
              structure.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={StructureSvg7} alt="confort" />
            </MyImageBox>
            <GridTitle>Confort</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Avec sa mobilité et son ergonomie, le e-cabinet permet une prise
              en charge plus confortable pour tous, que se soit pour le patient,
              les soignants ou le médecin téléconsultant.
            </Typography>
          </MyGridItem>
        </Grid>
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
