import React, { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import {
  MainInput,
  InputPassword,
  MainButton,
  MainSelect,
} from "../../Components/Common";
import palette from "../../Shared/palette";
import { LogoContainer, RightContainer, LoginImg } from "./Style";
import LogoWhite from "../../Assets/LogoWhite.png";
import LoginImage from "../../Assets/LoginImage.png";
import BottomEllipse from "../../Assets/NewsLetterEllipse.png";
import TopEllipse from "../../Assets/Ellipse.png";
import BottomDots from "../../Assets/NewsLetterDots2.png";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    select: 0,
    password: "",
    repeatPassword: "",
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        px: { xs: 0, sm: 4, md: 0, lg: 4 },
        overflowY: "auto",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          spacing={2}
          direction={{ xs: "column-reverse", md: "row-reverse" }}
        >
          <Grid item xs={12} md={5.5}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                color: palette.primary,
                mb: 1,
              }}
            >
              S’inscrire
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: { xs: "16px", lg: "18px" },
                color: palette.blackText,
              }}
            >
              Veuillez renseigner les champs suivants afin de créer votre compte
            </Typography>
            <Box sx={{ my: 4 }}>
              <MainInput
                inputLabel="Nom / Prénom"
                placeholder="Jonh Copper"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <MainInput
                inputLabel="Email/ Numéro de téléphone"
                placeholder="Entrer votre email/phone"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <MainInput
                inputLabel="Adresse"
                placeholder="Entrer votre adresse"
                value={values.address}
                onChange={(e) =>
                  setValues({ ...values, address: e.target.value })
                }
              />
              <MainSelect
                inputLabel="Sélectionner le profil qui vous convient :"
                placeholder="Selectionner dans le menu deroulant"
                value={values.select}
                onChange={(e) =>
                  setValues({ ...values, select: e.target.value })
                }
              />
              <InputPassword
                inputLabel="Créer votre mot de passe :"
                placeholder="Choisissez un mot de passe"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <InputPassword
                inputLabel="Confirmer le mot de passe choisit :"
                placeholder="Taper a nouveau votre mot de passe"
                value={values.repeatPassword}
                onChange={(e) =>
                  setValues({ ...values, repeatPassword: e.target.value })
                }
              />
              <MainButton
                sx={{ width: "100%", padding: "12px" }}
                text="S’inscrire"
              />
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
              Vous avez déjà un compte ?{" "}
              <strong
                style={{
                  color: palette.primary,
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Se connecter
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6.5}>
            <RightContainer>
              <Box>
                <LogoContainer>
                  <img src={LogoWhite} alt="MobilityCare" />
                  <Typography component="h2">MobilityCare</Typography>
                </LogoContainer>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ textAlign: "center", mb: 2, color: palette.whiteText }}
                >
                  La télémedecine nouvelle génération
                </Typography>
              </Box>
              <Box>
                <LoginImg src={LoginImage} alt="care" />
              </Box>
              <Typography
                component="p"
                variant="p"
                sx={{ textAlign: "center", color: palette.whiteText, mt: 3 }}
              >
                Créer par des médecins, optimiser par les utilisateurs, en
                accord avec toutes les normes et recommandations en vigueur. La
                télémédeci e humaine c’est maintenant avec MobilityCare.
              </Typography>
              <img className="top-ellipse" src={TopEllipse} alt="ellipse" />
              <img
                className="bottom-ellipse"
                src={BottomEllipse}
                alt="ellipse"
              />
              <img className="bottom-dots" src={BottomDots} alt="dots" />
            </RightContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
