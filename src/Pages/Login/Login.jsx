import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { MainInput, InputPassword, MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import {
  MyLink,
  GoogleButton,
  OtherLoginButton,
  LogoContainer,
  RightContainer,
  LoginImg,
} from "./Style";
import OtherLoginButton1 from "../../Assets/OtherLoginButton (1).png";
import OtherLoginButton2 from "../../Assets/OtherLoginButton (2).png";
import LogoWhite from "../../Assets/LogoWhite.png";
import LoginImage from "../../Assets/LoginImage.png";
import BottomEllipse from "../../Assets/NewsLetterEllipse.png";
import TopEllipse from "../../Assets/Ellipse.png";
import BottomDots from "../../Assets/NewsLetterDots2.png";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
              }}
            >
              Se connecter
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: { xs: "16px", lg: "18px" },
                color: palette.blackText,
              }}
            >
              Veuillez entrer les informations nécessaires :
            </Typography>
            <Box sx={{ my: 4 }}>
              <MainInput
                inputLabel="Email / Identifiant"
                placeholder="votre adresse@email.com"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <InputPassword
                inputLabel="Mot de passe"
                placeholder="Entrer votre mot de passe"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <MyLink onClick={() => console.log("navigate to something")}>
                Mot de passe oublié ?
              </MyLink>
              <MainButton
                sx={{ width: "100%", padding: "12px" }}
                text="Se connecter"
              />
              <Divider
                sx={{ my: 2, fontSize: "14px", color: palette.blackText }}
              >
                or
              </Divider>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: palette.blackText,
                }}
                component="p"
                variant="p"
              >
                Se connecter avec{" "}
              </Typography>
              <Stack
                sx={{ my: 2 }}
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems={{ xs: "center" }}
                spacing={2}
              >
                <GoogleButton disableRipple>
                  <img src={OtherLoginButton1} alt="google" />
                  Google
                </GoogleButton>
                <OtherLoginButton disableRipple>
                  <img src={OtherLoginButton2} alt="login" />
                </OtherLoginButton>
              </Stack>
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
              Vous n’avez pas de compte ?{" "}
              <strong
                style={{
                  color: palette.primary,
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                S’inscrire
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
                Faites partie de ce nouvel écosystème qui place l’humain au
                centre. des soins.
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

export default Login;
