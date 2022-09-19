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
import { Container, Typography, Stack, Box, Divider } from "@mui/material";
import FirstTarifHeroImage from "../../Assets/Tarif/FirstTarifHeroImage.png";
import FirstTarifBackgroundImage from "../../Assets/Tarif/FirstTarifBackgroundImage.png";
import Services1 from "../../Assets/Icons/Services (1).png";
import Services2 from "../../Assets/Icons/Services (2).png";
import Services3 from "../../Assets/Icons/Services (3).png";
import palette from "../../Shared/palette";
import { MdDone } from "react-icons/md";
import TarifChecked from "../../Assets/Tarif/TarifChecked.png";
import TarifDone from "../../Assets/Tarif/TarifDone.png";
import TarifDoneDisabled from "../../Assets/Tarif/TarifDoneDisabled.png";
import TarifDisabled from "../../Assets/Tarif/TarifDisabled.png";
import EmptyCheckbox from "../../Assets/Tarif/EmptyCheckbox.png";

const FirstTarif = () => {
  const [active, setActive] = useState("1");
  const [activeButton, setActiveButton] = useState("1");

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
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {activeButton === "1" ? (
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
                <img src={TarifChecked} alt="checked" />
                E-cabinet complet
              </RadioText>
              <RadioText>
                <img src={TarifChecked} alt="checked" />
                Connexion 4G incluse
              </RadioText>
              <RadioText>
                <img src={TarifChecked} alt="checked" />
                Terminal de paiement
              </RadioText>
              <RadioText>
                <img src={TarifChecked} alt="checked" />
                Lecteur de carte vitale
              </RadioText>
              <RadioText>
                <img src={TarifChecked} alt="checked" />
                Consommables* avec envoi mensuel
              </RadioText>
            </Box>
            <Box>
              <RadioText sx={{ fontWeight: "bold" }}>
                <img src={TarifChecked} alt="checked" />
                Accès à la plateforme :
              </RadioText>
              <DisabledRadioText>
                <img src={TarifDone} alt="done" />
                Téléconsultations illimitées
              </DisabledRadioText>
              <DisabledRadioText>
                <img src={TarifDone} alt="done" />
                Comptes utilisateurs illimités
              </DisabledRadioText>
              <DisabledRadioText>
                <img src={TarifDone} alt="done" />
                Accès base vidal illimités
              </DisabledRadioText>
              <DisabledRadioText>
                <img src={TarifDone} alt="done" />
                Ordonnances sécurisées illimités
              </DisabledRadioText>
              <DisabledRadioText>
                <img src={TarifDone} alt="done" />
                Formation médicale et gestionnaire gratuites
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
      ) : (
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
            Vente
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
                <img src={TarifChecked} alt="checked" />
                E-cabinet complet
              </RadioText>
              <RadioText>
                <img src={TarifChecked} alt="checked" />
                Terminal de paiement
              </RadioText>
              <RadioText>
                <img src={TarifChecked} alt="checked" />
                Lecteur de carte vitale
              </RadioText>
              <RadioText className="disabled">
                <img src={TarifDisabled} alt="disabled" />
                Connexion 4G incluse
              </RadioText>
              <RadioText className="disabled">
                <img src={TarifDisabled} alt="disabled" />
                Consommables* avec envoi mensuel
              </RadioText>
            </Box>
            <Box>
              <RadioText sx={{ fontWeight: "bold" }} className="disabled">
                <img src={TarifDisabled} alt="disabled" />
                Accès à la plateforme :
              </RadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Téléconsultations illimitées
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Comptes utilisateurs illimités
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Accès base vidal illimités
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Ordonnances sécurisées illimités
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Formation médicale et gestionnaire gratuites
              </DisabledRadioText>
            </Box>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" } }}
            />
            <Box>
              <RadioText sx={{ fontWeight: "bold" }}>
                <img src={EmptyCheckbox} alt="empty" />
                Abonnement à la plateforme :
              </RadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Téléconsultations illimitées
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Comptes utilisateurs illimités
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Accès base vidal illimités
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Ordonnances sécurisées illimités
              </DisabledRadioText>
              <DisabledRadioText className="unchecked">
                <img src={TarifDoneDisabled} alt="unchecked" />
                Formation médicale et gestionnaire gratuites
              </DisabledRadioText>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            sx={{ my: 5 }}
            spacing={3}
          >
            <ChooseButton
              className={active === "1" ? "active" : ""}
              onClick={() => setActive("1")}
              sx={{ flex: 2 }}
            >
              <Stack direction="row" alignItems="center">
                <Typography component="h5" element="h5">
                  Prix
                </Typography>
              </Stack>
              <ButtonDetails>
                <Typography component="h6" variant="h6">
                  À partir de 680€ HT/mois
                </Typography>
                <Typography component="p" variant="p">
                  Hors frais d’installation
                </Typography>
              </ButtonDetails>
            </ChooseButton>
            <ChooseButton
              className={active === "2" ? "active" : ""}
              onClick={() => setActive("2")}
              sx={{ flex: 1 }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ width: "100%" }}
              >
                <Typography component="h5" element="h5" align="right">
                  À partir de 149€ HT/mois
                </Typography>
              </Stack>
            </ChooseButton>
          </Stack>
          <MainButton text="Recevoir une proposition" sx={{ width: "100%" }} />
        </Container>
      )}
      <ServicesComponent content={contentArray} />
      <Footer />
    </>
  );
};

export default FirstTarif;
