import React, { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { MainInput, InputPassword, MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import { LogoContainer, RightContainer, LoginImg } from "./Style";
import LogoWhite from "../../Assets/LogoWhite.png";
import RecoveryImage from "../../Assets/RecoveryImage.png";
import BottomEllipse from "../../Assets/NewsLetterEllipse.png";
import TopEllipse from "../../Assets/Ellipse.png";
import BottomDots from "../../Assets/NewsLetterDots2.png";

const Recovery = () => {
  const [values, setValues] = useState({
    email: "",
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
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          spacing={2}
          direction={{ xs: "column-reverse", md: "row" }}
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
              Créer un nouveau <br /> mot de passe
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: { xs: "16px", lg: "18px" },
                color: palette.blackText,
                maxWidth: "400px",
              }}
            >
              Veuillez entrer ces champs pour réinitialiser votre mot de passe :
            </Typography>
            <Box sx={{ my: 4 }}>
              <MainInput
                inputLabel="Email/Numéro de téléphone"
                placeholder="example@email.com"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <InputPassword
                inputLabel="Nouveau mot de passe"
                placeholder="Entrer votre mot de passe"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <InputPassword
                inputLabel="Confirmer le nouveau mot de passe :"
                placeholder="Entrer  à nouveau votre mot de passe"
                value={values.repeatPassword}
                onChange={(e) =>
                  setValues({ ...values, repeatPassword: e.target.value })
                }
              />
              <MainButton
                sx={{ width: "100%", padding: "12px" }}
                text="Valider"
              />
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
              Allez a{" "}
              <strong
                style={{
                  color: palette.primary,
                  fontWeight: "600",
                  cursor: "pointer",
                  textDecoration: "underline",
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
                <LoginImg src={RecoveryImage} alt="care" />
              </Box>
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

export default Recovery;
