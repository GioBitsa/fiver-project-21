import React from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import { MainBox, MyContainer, LogoContainer, MyIconButton } from "./Style";
import TopEllipse from "../../Assets/NewsLetterEllipse.png";
import BottomEllipse from "../../Assets/Ellipse.png";
import Dots from "../../Assets/WhiteDots.png";
import Logo from "../../Assets/Logo.png";
import Badge from "../../Assets/Badge.svg";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import DoctorImage from "../../Assets/DoctorImage.png";
import { MainSelect, MainInput } from "../../Components/Common";
import { BiCamera } from "react-icons/bi";

const CompleteDoctorProfile = () => {
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
            <Stack alignItems={{ xs: "center", md: "flex-start" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "170px",
                  ml: { xs: 0, md: 3 },
                }}
              >
                <img style={{ width: "100%" }} src={DoctorImage} alt="doctor" />
                <MyIconButton
                  aria-label="upload"
                  component="label"
                  disableRipple
                >
                  <input hidden accept="image/*" type="file" />
                  <BiCamera
                    style={{ color: palette.blackText, opacity: 0.5 }}
                  />
                </MyIconButton>
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  component="h4"
                  variant="h5"
                  sx={{ color: palette.primary, fontWeight: "600" }}
                >
                  Dr. Jonh Copper
                </Typography>
                <img style={{ width: "40px" }} src={Badge} alt="verified" />
              </Stack>
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: palette.blackText,
                  opacity: 0.8,
                  mb: 3,
                  fontSize: "14px",
                }}
              >
                N° RPPS : 9823423
              </Typography>
            </Stack>
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
