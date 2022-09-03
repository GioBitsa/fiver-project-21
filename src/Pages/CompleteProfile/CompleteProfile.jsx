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

const CompleteProfile = () => {
  const [checked, setChecked] = useState(false);

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
              display: { xs: "none", md: "flex" },
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
            <MainInput inputLabel="Nom" placeholder="Wick" />
          </Grid>
          <Grid item xs={12} md={6}>
            <MainInput inputLabel="Prénom" placeholder="John" />
          </Grid>
          <Grid item xs={12} md={6}>
            <MainInput inputLabel="Email" placeholder="Votre adresse mail" />
          </Grid>
          <Grid item xs={12} md={6}>
            <MainInput
              type="number"
              inputLabel="Numéro de mobile"
              placeholder="+33612345678"
            />
          </Grid>
          <Grid item xs={12}>
            <MainInput inputLabel="Numéro RPPS" placeholder="Entrer RPPS" />
          </Grid>
          <Grid item xs={12}>
            <InputPassword
              inputLabel="Mot de passe"
              placeholder="Enter Mot de passe"
            />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="flex-start"
          onClick={() => setChecked(!checked)}
          sx={{ cursor: "pointer", mb: "30px" }}
        >
          <Box
            sx={{
              minWidth: "20px",
              width: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "3px",
            }}
          >
            {checked ? (
              <IoCheckmarkDoneCircleSharp size="100%" />
            ) : (
              <IoCheckmarkDoneCircleOutline size="100%" />
            )}
          </Box>
          <Typography
            sx={{
              ml: 1,
              color: checked ? palette.primary : palette.blackText,
              opacity: checked ? 1 : 0.8,
            }}
          >
            Je certifie sur l’honneur être un professionnel de santé inscrit à
            l’ordre national des médecins.
          </Typography>
        </Stack>
        <IconButton
          aria-label="upload"
          component="label"
          disableRipple
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            my: 2,
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
