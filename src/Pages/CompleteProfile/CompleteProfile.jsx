import React from "react";
import { Typography, IconButton, Box, Stack, Grid } from "@mui/material";
import { MainBox, MyContainer, LogoContainer } from "./Style";
import TopEllipse from "../../Assets/NewsLetterEllipse.png";
import BottomEllipse from "../../Assets/Ellipse.png";
import Dots from "../../Assets/WhiteDots.png";
import Logo from "../../Assets/Logo.png";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import Step3Current from "../../Assets/CreateProfile/Step3Current.png";
import { MainSelect, MainInput } from "../../Components/Common";

const CompleteProfile = () => {
  return (
    <MainBox>
      <MyContainer maxWidth="lg">
        <LogoContainer>
          <img src={Logo} alt="MobilityCare" />
          <Typography component="h2">MobilityCare</Typography>
        </LogoContainer>
        <Stack direction="row" justifyContent="space-between" sx={{ my: 2 }}>
          <Box sx={{ maxWidth: "500px" }}>
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
              Completer mon profil
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText }}
            >
              Complétez votre profil au mieux afin de donner le maximum
              d’information a vos correspondants.
            </Typography>
          </Box>
          <IconButton
            aria-label="upload"
            component="label"
            disableRipple
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input hidden accept="image/*" type="file" />
            <img src={Step3Current} alt="upload" />
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                textAlign: "center",
                color: palette.primary,
              }}
            >
              Télécharger votre photo <br /> de profil
            </Typography>
          </IconButton>
        </Stack>
        <Grid container columnSpacing={3}>
          <Grid item xs={12}>
            <MainSelect
              inputLabel="Groupe sanguin"
              placeholder="Select your blood group"
              value={0}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MainInput
              inputLabel="Traitement(s) au long court (3mois)"
              placeholder="Facultatif"
            />
          </Grid>
        </Grid>
        <Stack alignItems="center" spacing={2}>
          <MainButton text="Suivant" sx={{ width: "100%" }} />
          <Typography
            component="span"
            variant="p"
            sx={{
              textDecoration: "underline",
              color: palette.primary,
              cursor: "pointer",
            }}
          >
            Se connecter?
          </Typography>
        </Stack>
      </MyContainer>
      <img className="top-ellipse" src={TopEllipse} alt="ellipse" />
      <img className="bottom-ellipse" src={BottomEllipse} alt="ellipse" />
      <img className="dots" src={Dots} alt="dots" />
    </MainBox>
  );
};

export default CompleteProfile;
