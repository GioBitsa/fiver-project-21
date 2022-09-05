import React from "react";
import {
  Announcement,
  Faq,
  Footer,
  Navbar,
  HeroImageContainer,
  VideoPreview,
} from "../../Components";
import { NestedGrid, LeftGrid, RightGrid } from "./Style";
import StructureHeroImage from "../../Assets/StructureHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
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
          Les atouts pour votre territoire
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
          Un écosystème de santé nouveau et complet adapté a vos besoins, votre
          population, vos infrastructures existantes. Nous capitalisons sur vos
          ressources disponibles afin de facilité l’intégration du concept pour
          vous et chez vous
        </Typography>
        <Grid container spacing={3} sx={{ width: "100%", ml: 0 }}>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              Assitance
            </LeftGrid>
            <RightGrid item xs={7}>
              Nous sommes a vos côtés et proposons une assitance technique 6j/7
              en cas de besoins
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              Formations adaptées
            </LeftGrid>
            <RightGrid item xs={7}>
              Nous formons les assitant(e)s et médecins de vos collectivités.,
              selon leurs niveaux pour une mise en place rapide et efficace
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              Application mobile
            </LeftGrid>
            <RightGrid item xs={7}>
              Simple et ludique, notre application mobile est adapté pour tout
              âge. Elle permettra a vos usagés d’avoir tous les éléments
              relatifs a leur santé au bout des doigts
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              Maillage territorial
            </LeftGrid>
            <RightGrid item xs={7}>
              Nous vous aidons a créer un maillage entre les différents acteurs
              et entitées de santé de votre territoire.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              Sécurité
            </LeftGrid>
            <RightGrid item xs={7}>
              L’ensemble des informations relatives à la santé de vos habitants
              sont chiffrées de bout en bout. Nos protocoles de sécurité
              respectent toutes les dernières normes cybersécurités
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              Outil de supervision
            </LeftGrid>
            <RightGrid item xs={7}>
              L’administrateur a accès a un tableau de bord lui permettant
              d’obtenir les informations sur le fonctionnement et le bon
              déroulement des consultations en temps réel.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              100% Gratuit
            </LeftGrid>
            <RightGrid item xs={7}>
              Utilisation gratuite de la plateforme par vos professionels
              (médecin, assistant...) pour facilité leur adhésions au concept
            </RightGrid>
          </NestedGrid>
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
