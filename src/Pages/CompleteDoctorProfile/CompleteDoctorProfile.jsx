import React, { useState } from "react";
import { Typography, IconButton, Box, Stack, Grid } from "@mui/material";
import { MainBox, MyContainer, LogoContainer } from "./Style";
import TopEllipse from "../../Assets/NewsLetterEllipse.png";
import BottomEllipse from "../../Assets/Ellipse.png";
import Dots from "../../Assets/WhiteDots.png";
import Logo from "../../Assets/Logo.png";
import { InputPassword, MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import Step3Current from "../../Assets/CreateProfile/Step3Current.png";
import { MainSelect, MainInput } from "../../Components/Common";
import {
  IoCheckmarkDoneCircleSharp,
  IoCheckmarkDoneCircleOutline,
} from "react-icons/io5";

const CompleteDoctorProfile = () => {
  const [checked, setChecked] = useState(false);

  return (
    <MainBox>
      <MyContainer maxWidth="lg">
        <LogoContainer>
          <img src={Logo} alt="MobilityCare" />
          <Typography component="h2">MobilityCare</Typography>
        </LogoContainer>
        <Box sx={{ my: 2 }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: palette.primary,
              fontSize: "24px",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Créer mon profil
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ color: palette.blackText }}
          >
            Complétez votre profil au mieux afin de donner le maximum
            d’information a vos correspondants
          </Typography>
        </Box>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} md={6}>
            asd
          </Grid>
          <Grid item xs={12} md={6}>
            <MainSelect
              inputLabel="Votre spécialité"
              placeholder="Selectionner votre spécialité"
              value={0}
            />
            <MainInput
              inputLabel="Votre lieu d’excercice"
              placeholder="Adresse"
            />
          </Grid>
          <Grid item xs={12}>
            <MainInput
              inputLabel="Vos qualifications éventuelles:"
              placeholder="Example: Médecine générale a orientation pédiatrique
                   DU de pédiatrie générale....."
            />
          </Grid>
          <Grid item xs={12}>
            <MainSelect
              inputLabel="Langues parlées couramment"
              placeholder="Anglais / Arabe"
              value={0}
            />
          </Grid>
          <Grid item xs={12}>
            <MainInput
              type="textarea"
              inputLabel="Décrivez vous en quelques mots :"
              placeholder="Facultatif"
            />
          </Grid>
        </Grid>
        <MainButton text="Valider mon profil" sx={{ width: "100%" }} />
      </MyContainer>
      <img className="top-ellipse" src={TopEllipse} alt="ellipse" />
      <img className="bottom-ellipse" src={BottomEllipse} alt="ellipse" />
      <img className="dots" src={Dots} alt="dots" />
    </MainBox>
  );
};

export default CompleteDoctorProfile;
