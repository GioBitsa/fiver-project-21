import React, { useState } from "react";
import {
  Navbar,
  TarifHeroSection,
  ServicesComponent,
  Footer,
} from "../../Components";
import { MainButton } from "../../Components/Common";
import {
  ChooseButton,
  ButtonDetails,
  RadioText,
  DisabledRadioText,
} from "./Style";
import { Container, Typography, Stack, Box } from "@mui/material";
import FirstTarifHeroImage from "../../Assets/Tarif/FirstTarifHeroImage.png";
import FirstTarifBackgroundImage from "../../Assets/Tarif/FirstTarifBackgroundImage.png";
import Services1 from "../../Assets/Services (1).png";
import Services2 from "../../Assets/Services (2).png";
import Services3 from "../../Assets/Services (3).png";
import palette from "../../Shared/palette";
import { MdDone } from "react-icons/md";

const FirstTarif = () => {
  const [active, setActive] = useState("1");

  const contentArray = [
    {
      image: Services1,
      title: "Accompagnement",
      desc: "Un accompagnement à la mise en place de votre activité.",
    },
    {
      image: Services2,
      title: "Maintenance",
      desc: "Maintenance informatique et du matériel pour ne pas altérer votre pratique.",
    },
    {
      image: Services3,
      title: "Securité",
      desc: "Système entièrement sécurisé avec possibilité",
    },
    {
      image: Services1,
      title: "SAV",
      desc: "Gestion panne matériel > 72 heures",
    },
    {
      image: Services2,
      title: "Garantie",
      desc: "Durant le durée de la location ou 24 mois en cas d’achat.",
    },
    {
      image: Services3,
      title: "Système d’alerte",
      desc: "Notifications et alertes en cas d’anomalie ou de dysfonctionnement objectivé par nos équipe.",
    },
    {
      image: Services1,
      title: "Installation et mise en service du système",
      desc: "Nous vous accompagnions jusqu’à ce que notre solution soit paramétrée et installée",
    },
    {
      image: Services2,
      title: "Formation",
      desc: "Des formations adaptées a chaque niveau.",
    },
    {
      image: Services3,
      title: "Branding/marketing",
      desc: "Mise a disposition d’éléments marketing  ( artcile, publication, réseau sociaux..) pour valoriser vos projets.",
    },
  ];

  return (
    <>
      <Navbar />
      <TarifHeroSection
        mainImage={FirstTarifHeroImage}
        backgroundImage={FirstTarifBackgroundImage}
        title="E-cabinet"
        desc="E-cabinet complet avec l’ensemble des outils numériques et les périphériques nécessaires au bon fonctionnement du dispositif."
        paymentTitle="Choisissez votre plan :"
        firstButton="Location"
        secondButton="Achat"
        activeDot="1"
      />
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: palette.navbarBackground, mb: "50px", py: 5 }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
          }}
        >
          Location
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.black,
            opacity: 0.5,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            mb: 4,
          }}
        >
          Option la plus populaire
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={3}
        >
          <Box>
            <RadioText>
              <span /> E-cabinet complet
            </RadioText>
            <RadioText>
              <span /> Connexion 4G incluse
            </RadioText>
            <RadioText>
              <span /> Terminal de paiement
            </RadioText>
            <RadioText>
              <span /> Lecteur de carte vitale
            </RadioText>
            <RadioText>
              <span /> Consommables* avec envoi mensuel
            </RadioText>
          </Box>
          <Box>
            <RadioText>
              <span /> E-cabinet complet
            </RadioText>
            <DisabledRadioText>
              <span /> Téléconsultations illimitées
            </DisabledRadioText>
            <DisabledRadioText>
              <span /> Comptes utilisateurs illimités
            </DisabledRadioText>
            <DisabledRadioText>
              <span /> Accès base vidal illimités
            </DisabledRadioText>
            <DisabledRadioText>
              <span /> Ordonnances sécurisées illimités
            </DisabledRadioText>
            <DisabledRadioText>
              <span /> Formation médicale et gestionnaire gratuites
            </DisabledRadioText>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          sx={{ my: 5 }}
        >
          <ChooseButton
            className={active === "1" ? "active" : ""}
            onClick={() => setActive("1")}
          >
            <Stack direction="row" alignItems="center">
              <span>
                <MdDone />
              </span>
              <Typography component="h5" element="h5">
                24 mois
              </Typography>
            </Stack>
            <ButtonDetails>
              <Typography component="h6" variant="h6">
                680€ HT/mois
              </Typography>
              <Typography component="p" variant="p">
                Hors frais d’installation
              </Typography>
            </ButtonDetails>
          </ChooseButton>
          <ChooseButton
            className={active === "2" ? "active" : ""}
            onClick={() => setActive("2")}
          >
            <Stack direction="row" alignItems="center">
              <span>
                <MdDone />
              </span>
              <Typography component="h5" element="h5">
                36 mois
              </Typography>
            </Stack>
            <ButtonDetails>
              <Typography component="h6" variant="h6">
                520€ HT/mois
              </Typography>
              <Typography component="p" variant="p">
                Hors frais d’installation
              </Typography>
            </ButtonDetails>
          </ChooseButton>
        </Stack>
        <MainButton text="Recevoir une proposition" sx={{ width: "100%" }} />
      </Container>
      <ServicesComponent content={contentArray} />
      <Footer />
    </>
  );
};

export default FirstTarif;
