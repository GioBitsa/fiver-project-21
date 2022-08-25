import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  ListItemIcon,
  ListItemButton,
  Button,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import {
  NewsLetter,
  MyInput,
  MyButton,
  MyForm,
  MyList,
  MyListSecondary,
} from "./Style";
import palette from "../../Shared/palette";
import NewsLetterEllipse from "../../Assets/NewsLetterEllipse.png";
import NewsLetterDots from "../../Assets/NewsLetterDots.png";
import NewsLetterDots2 from "../../Assets/NewsLetterDots2.png";
import FooterLogo from "../../Assets/FooterLogo.png";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "50px", md: "200px" },
        backgroundColor: palette.navbarBackground,
      }}
    >
      <Box
        sx={{
          backgroundColor: palette.primary,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            padding: { xs: "0 0 50px 0", md: "150px 0 50px" },
            position: "relative",
          }}
        >
          <NewsLetter alignItems="center" direction="row" spacing={2}>
            <Box>
              <Typography
                component="h3"
                variant="h4"
                sx={{ color: palette.primary, fontWeight: "bold", mb: 2 }}
              >
                NEWSLETTER
              </Typography>
              <Typography component="p" variant="p" sx={{ maxWidth: "500px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                interdum morbi suspendisse tellus adipiscing eu tempus risus.
                Congue interdum morbi suspendisse tellus adipiscing eu tempus
                risus.
              </Typography>
              <img className="ellipse" src={NewsLetterEllipse} alt="ellipse" />
              <img className="left-dots" src={NewsLetterDots} alt="dots" />
              <img className="right-dots" src={NewsLetterDots2} alt="dots" />
            </Box>
            <Box sx={{ margin: "0 auto", paddingLeft: "16px" }}>
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: "18px", mb: 1 }}
              >
                Sign up here and stay in the loop
              </Typography>
              <MyForm action="#">
                <MyInput />
                <MyButton type="submit">Subscribe</MyButton>
              </MyForm>
            </Box>
          </NewsLetter>
        </Container>
        <Container maxWidth="lg" sx={{ color: palette.whiteText }}>
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "10px !important",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <img style={{ width: "250px" }} src={FooterLogo} alt="logo" />
              <Typography
                component="p"
                variant="p"
                sx={{ maxWidth: { xs: "initial", md: "500px" } }}
              >
                La télémédecine nouvelle génération,
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Stack spacing={2}>
                <Typography component="p" variant="h6">
                  Address
                </Typography>
                <MyList>
                  <ListItemButton disableRipple>
                    <ListItemIcon>
                      <GoLocation />
                    </ListItemIcon>
                    <ListItemText primary="1 rue Stockholm, 75008 Paris, France" />
                  </ListItemButton>
                  <ListItemButton disableRipple>
                    <ListItemIcon>
                      <GoMail />
                    </ListItemIcon>
                    <ListItemText primary="ourstudio@hello.com" />
                  </ListItemButton>
                  <ListItemButton disableRipple>
                    <ListItemIcon>
                      <BsTelephone />
                    </ListItemIcon>
                    <ListItemText primary="+271 386-647-3637" />
                  </ListItemButton>
                </MyList>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MyListSecondary>
                <ListItemButton disableRipple>
                  <ListItemText primary="Mentions légales - CGU" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Sécurisation des données" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Politique relative aux cookies" />
                </ListItemButton>
              </MyListSecondary>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ alignSelf: "flex-start" }}>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  mb: 1,
                  textAlign: { xs: "center", md: "right" },
                  mt: { xs: "20px", md: 0 },
                }}
              >
                Suivez nous sur:
              </Typography>
              <Stack
                direction="row"
                sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
                spacing={1}
              >
                <Button disableRipple sx={{ minWidth: "35px", width: "50px" }}>
                  <TiSocialFacebook size="35px" color={palette.whiteText} />
                </Button>
                <Button disableRipple sx={{ minWidth: "35px", width: "50px" }}>
                  <VscTwitter size="35px" color={palette.whiteText} />
                </Button>
                <Button disableRipple sx={{ minWidth: "35px", width: "50px" }}>
                  <FaLinkedinIn size="35px" color={palette.whiteText} />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Divider sx={{ backgroundColor: palette.whiteText, my: 2 }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              color: palette.whiteText,
              flexDirection: {
                xs: "column",
                md: "row",
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography>Privacy Policy</Typography>
            <Typography>
              © 2022 MobilityCare, SAS. Tous droits réservés.
            </Typography>
            <Typography>Terms and Condition</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
