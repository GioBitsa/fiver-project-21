import React from "react";
import {
  Announcement,
  HeroImageContainer,
  Navbar,
  FormationsItemSection,
} from "../../Components";
import { Box, Container, Typography, Stack } from "@mui/material";
import { HeroContainer } from "./Style";
import HighLight from "../../Assets/HighLight.png";
import palette from "../../Shared/palette";
import { MainButton } from "../../Components/Common";
import HeroImgageMobile from "../../Assets/Formations/HeroImageMobile.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import Rocket from "../../Assets/Icons/Rocket.png";
import Clock from "../../Assets/Icons/Clock.png";
import FormationsImage1 from "../../Assets/Formations/FormationsImage (1).png";
import FormationsImage2 from "../../Assets/Formations/FormationsImage (2).png";
import FormationsImage3 from "../../Assets/Formations/FormationsImage (3).png";

const Formations = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroContainer>
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ py: 5 }}>
            <Box sx={{ maxWidth: "600px" }}>
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
                  mb: { xs: 3, md: 5 },
                }}
              >
                Nos{" "}
                <Box
                  sx={{
                    display: "inline-block",
                    position: "relative",
                    color: palette.primary,
                    mr: 2,
                  }}
                >
                  <img className="highLight" src={HighLight} alt="highlight" />
                  Formations
                </Box>
              </Typography>
              <Typography component="p" variant="p">
                Nous vous proposons des formations initiales et de
                perfectionnements adaptées a votre niveau. <br /> Que vous soyez
                médecin, administrateur ou assistant, une formation est faite
                pour vous.
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ my: { xs: 0, sm: 3 } }}
              >
                Nos formations sont en e-learning et en présentielles pour que
                vous puissiez vous appropriez pleinement les outils et être à
                l’aise avec le matériel.
              </Typography>
              <Typography component="p" variant="p">
                De plus, a chaque évolution du système, vous recevrez
                automatiquement des notifications pour monter en compétence et
                optimisier vos prise en charge.
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: "50px", display: { xs: "none", md: "flex" } }}
              >
                <MainButton
                  text="Démarrer maintenant"
                  sx={{ minWidth: "200px" }}
                />
                <MainButton
                  text="Connexion"
                  sx={{
                    minWidth: "200px",
                    backgroundColor: palette.whiteText,
                    color: palette.blackText,
                    "&:hover": { backgroundColor: palette.whiteText },
                  }}
                />
              </Stack>
            </Box>
            <Stack
              alignItems="center"
              spacing={3}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <HeroImageContainer
                main={HeroImgageMobile}
                background={HeroImageBackground}
              />
              <Stack direction="row" spacing={2}>
                <MainButton text="Démarrer maintenant" />
                <MainButton
                  text="Connexion"
                  sx={{
                    backgroundColor: palette.whiteText,
                    color: palette.blackText,
                    border: `1px solid ${palette.blackText}`,
                    opacity: 0.4,
                    "&:hover": { backgroundColor: palette.whiteText },
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </HeroContainer>
      <Container maxWidth="lg" sx={{ pt: 5, pb: { xs: 0, md: 5 } }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
          }}
        >
          Formations adaptées a votre profil
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.black,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            mt: 2,
          }}
        >
          Sélectionnez votre profil
        </Typography>
      </Container>
      <FormationsItemSection
        align="left"
        index="01"
        title="Médecins"
        desc="La formation est faite pour vous apprendre a utiliser au mieux la
        plateforme. Ainsi grâce a cette formation entièrement Gratuite, vous
        aurez toutes les cartes en main pour optimiser votre pratique en
        téléconsultation."
        subTitle="Les différents grands chapitres :"
        content={[
          "Gestion du temps de travail : calendrier, planning d’astreinte, planning de garde....",
          "Communication (MAILS, messagerie instantée) : échanges entre professionels, avec assistants et les structures de soins...",
          "Consultation : utilisation des différents dispositifs médicaux, accès bases Vidal, création de compte rendu et d’ordonnance",
          "gestion facturation: émission fs, télétransmission, recettes...",
        ]}
        details={[
          { src: Rocket, text: "En ligne : 21 Octobre 2022" },
          { src: Clock, text: "Durée : 7h" },
        ]}
        strong="Gratuit"
        strongMobile="Price: $450"
        buttonText="Inscrivez-vous maintenant"
        dividerText=""
        mainImage={FormationsImage1}
      />
      <FormationsItemSection
        align="right"
        index="02"
        title="Assistants"
        desc="Vous êtes la pierre angulaire du système, votre présence auprès du patient est nécessaire pour le bon déroulement des soins et de la téléconsultation."
        subTitle="Les différents grands chapitres (e-learning)* :"
        content={[
          "Bases de physiologie et physiopathologie",
          "Module psychologie",
          "Interets des différents dispositifs médicaux présents dans le Ecabinet",
          "Utilisation des différents dispositifs médicaux présents dans le Ecabinet",
          "Signes d’alertes et conduite a tenir",
          "Réglementations",
          "Utilisation de la plateforme MbilityCare ",
        ]}
        details={[
          { src: Clock, text: "Durée : Variable selon votre niveau" },
          { src: Rocket, text: "Début : 15octobre 2022" },
        ]}
        strong="À partir de 249€"
        strongMobile="Price: $450"
        buttonText="Inscrivez-vous maintenant"
        dividerText="*Une partie de la formation se déroule en présentielle:"
        mainImage={FormationsImage2}
      />
      <FormationsItemSection
        align="left"
        index="03"
        title="Administrateurs"
        desc="Formation accessible aux structurex de soins, collectivités ou grands groupes bénéficiants d’une flotte de produits MobilityCare."
        subTitle="Les différents grands chapitres (e-learning) + présentielle :"
        content={[
          "Tableau de bord : gestion de flotte",
          "Planning : visualisation création et gestion des tournées",
          "Gestion incidents : utilisation de l’outils de génération des tickets",
          "Mise en place organisation : création d’équipe, contact médecin et structure extérieure",
          "Gestion facturation",
        ]}
        details={[
          { src: Rocket, text: "Début : 15 octobre 2022" },
          { src: Clock, text: "Durée : 8 heures" },
        ]}
        strong="Gratuit*"
        strongMobile="Price: $450"
        buttonText="Inscrivez-vous maintenant"
        dividerText="*formation gratuite pour un administrateur par structure"
        mainImage={FormationsImage3}
      />
    </>
  );
};

export default Formations;
