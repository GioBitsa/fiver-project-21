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
import SecondTarifHeroImage from "../../Assets/Tarif/SecondTarifHeroImage.png";
import SecondTarifBackgroundImage from "../../Assets/Tarif/SecondTarifBackgroundImage.png";
import Services1 from "../../Assets/Icons/Services (1).png";
import Services2 from "../../Assets/Icons/Services (2).png";
import Services3 from "../../Assets/Icons/Services (3).png";
import palette from "../../Shared/palette";
import { MdDone } from "react-icons/md";

const SecondTarif = () => {
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
        mainImage={SecondTarifHeroImage}
        backgroundImage={SecondTarifBackgroundImage}
        title="MediScoot"
        desc="Ce dispositif permet une
        réactivité accrue en milieu urbain ou semi-urbain, de plus il s’inscrit dans une démarche
        écologique car électrique. Sans permis !"
        paymentTitle="Disponible seulement à la vente "
        firstButton="Achat seul"
        secondButton="Achat combiné"
        activeDot="2"
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
          Achat seul
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
              <span />
              Tricycle électrique
            </RadioText>
            <RadioText>
              <span /> Système de fixation pour le E-cabinet
            </RadioText>
            <RadioText>
              <span /> Système de géolocalisation
            </RadioText>
            <RadioText>
              <span /> Gestion de flotte (en option)
            </RadioText>
          </Box>
          <Box>
            <RadioText>
              <span /> Accès à la plateforme :
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

export default SecondTarif;
