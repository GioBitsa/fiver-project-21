import React from "react";
import {
  Announcement,
  Faq,
  Footer,
  Navbar,
  HeroImageContainer,
  VideoPreview,
} from "../../Components";
import HeroImg from "../../Assets/heroImg.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import TeritoriesVideoPreview from "../../Assets/TeritoriesVideoPreview.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import { MainButton, OutlineMainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import { NestedGrid, LeftGrid, RightGrid } from "./Style";

const Teritories = () => {
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
              Notre concept une <br />
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
              pour les territoires
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              Du fait de la désertification médicale, les élus sont confrontés
              aux problèmes d’accessibibilité aux soins pour leurs administrés,
              en particulier pour les plus fragiles.
            </Typography>
            <Typography component="p" variant="p" sx={{ fontWeight: "300" }}>
              Notre concept grâce aux différentes solutions mobiles qu’il
              propose, permet de répondre aux besoins de santé que se soit en
              milieux urbains, semi-urbains et même ruraux.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: "50px", display: { xs: "none", md: "flex" } }}
            >
              <MainButton text="Démarrer maintenant" />
              <OutlineMainButton text="Contacter l’équipe commerciale" />
            </Stack>
          </Box>
          <Stack alignItems="center" spacing={3}>
            <HeroImageContainer
              main={HeroImg}
              background={HeroImageBackground}
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MainButton text="Démarrer maintenant" />
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
          preview={TeritoriesVideoPreview}
          title="Notre concept en vidéo"
          desc="Notre concept et nos produits semblent répondre à vos besoins et
          vous intéresse. découvrez dès maintenant nos services et
          l’ensemble de nos prestations."
          button="Voir Offre & services"
        />
        <Faq />
      </Box>
      <Footer />
    </>
  );
};

export default Teritories;
