import React, { Fragment } from "react";
import {
  Announcement,
  Footer,
  Navbar,
  HeroImageContainer,
  CommonQuestions,
  StartingSteps,
  Functionalities,
} from "../../Components";
import MedicineHeroImage from "../../Assets/Medicine/MedicineHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import { MyImageBox, MyGridItem, GridTitle, RightButton } from "./Style";
import MedicineSvg1 from "../../Assets/Medicine/MedicineSvg (1).png";
import MedicineSvg2 from "../../Assets/Medicine/MedicineSvg (2).png";
import MedicineSvg3 from "../../Assets/Medicine/MedicineSvg (3).png";
import MedicineSvg4 from "../../Assets/Medicine/MedicineSvg (4).png";
import MedicineSvg5 from "../../Assets/Medicine/MedicineSvg (5).png";
import MedicineSvg6 from "../../Assets/Medicine/MedicineSvg (6).png";
import MedicineVideoPreview from "../../Assets/Medicine/MedicineVideoPreview.png";
import { BsChevronRight } from "react-icons/bs";

const Medicine = () => {
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
              MobilityCare <br />
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
                Médecin
              </Box>
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              Notre solution vous ont gagner un temps précieux. Elle vous permet
              de désengorger votre cabinet médical pour des pathologies
              bénignes, de consulter vos patients (à domicile) pour lesquels
              vous ne pouvez plus vous déplacer ,de partager plus rapidement et
              efficacement les informations entre les professionnels... <br />{" "}
              Notre concept se veut être une pratique différente de la médecine
              et non pas une alternative à la médecine actuelle.
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: palette.primary,
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "28px", md: "34px", lg: "38px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              100% Gratuit
            </Typography>
          </Box>
          <HeroImageContainer
            main={MedicineHeroImage}
            background={HeroImageBackground}
          />
        </Stack>
      </Container>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: palette.navbarBackground, py: 5, mb: "50px" }}
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
          Fonctionnalités disponibles
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
          Vous n’avez rien a payer et vous disposez d’un ensemble de
          fonctionnalité habituellement payante. Notre priorité est
          l’amélioration de votre prise en charge médical grâce à notre concept
          unique tout en étant assité par un professionel.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg1} alt="website" />
            </MyImageBox>
            <GridTitle>100% en ligne</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Pas d’installation nécessaire, accédez à votre espace de travail
              où que vous soyez.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg2} alt="patients" />
            </MyImageBox>
            <GridTitle>Un meilleur suivi des patients</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Echangez avec vos confrères et vos patients , transmettez leurs
              des documents en quelques clics.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg3} alt="mobility" />
            </MyImageBox>
            <GridTitle>Pas de contraintes de déplacement </GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Consultez même les personnes qui n’ont pas la possibilité de se
              déplacer pour obtenir un avis médical.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg4} alt="care" />
            </MyImageBox>
            <GridTitle> Gestion administrative simplifiée</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Facturation et télétransmission en ligne, mise à jour automatique.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg5} alt="easy" />
            </MyImageBox>
            <GridTitle> Meilleure organisation du temps médical</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Téléconsulter quand vous souhaitez, gérer et optimiser votre temps
              entre votre pratique habituelle en cabinet et en ligne.
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg6} alt="reactive" />
            </MyImageBox>
            <GridTitle> Plus rapide et réactive</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              En cas de nécessité, vous répondrez aux besoins de vos patients au
              plus vite pour optimiser leurs délais de prise en charge.
            </Typography>
          </MyGridItem>
        </Grid>
        <MainButton
          text="S’inscrire"
          sx={{ display: "flex", margin: "50px auto 25px", minWidth: "250px" }}
        />
      </Container>
      <Functionalities />
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
        <MainButton text="Notre Interface 100% Web" />
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "21px", sm: "34px", md: "38px", lg: "44px" },
            my: 5,
          }}
        >
          Votre interface
        </Typography>
        <img style={{ width: "100%" }} src={MedicineVideoPreview} alt="video" />
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{ mt: 3 }}
        >
          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                color: palette.primary,
                fontWeight: "600",
                fontSize: { xs: "16px", sm: "21px", md: "28px" },
                mb: 2,
              }}
            >
              Une remontée de données en temps réel.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8 }}
            >
              Vous recevez sur votre interface visio l’ensemble des informations
              issus de votre examen clinique en temps réel grâce à nos outils
              connectés.
            </Typography>
          </Box>
          <RightButton>
            <BsChevronRight />
          </RightButton>
        </Stack>
      </Container>
      <StartingSteps
        title={
          <Fragment>
            3 étapes pour démarer avec <br /> Mobility Care
          </Fragment>
        }
        steps={[
          {
            id: 1,
            header: "S’inscrire",
            desc: "Inscription et utilisation gratuite.",
            button: "S’inscrire",
          },
          {
            id: 2,
            header: "Se former",
            desc: "Accedez aux formations en ligne pour une prise en main facilité.",
            button: "Suivre les formations",
          },
          {
            id: 3,
            header: "Commencer",
            desc: "Vous avez toutes les cartes en mains pour réaliser des téléconsultations",
            button: "Se connecter",
          },
        ]}
      />
      <CommonQuestions />
      <Footer />
    </>
  );
};

export default Medicine;
