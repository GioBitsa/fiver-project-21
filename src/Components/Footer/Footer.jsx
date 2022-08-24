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
} from "@mui/material";
import { NewsLetter, MyInput, MyButton, MyForm, MyList } from "./Style";
import palette from "../../Shared/palette";
import NewsLetterEllipse from "../../Assets/NewsLetterEllipse.png";
import NewsLetterDots from "../../Assets/NewsLetterDots.png";
import NewsLetterDots2 from "../../Assets/NewsLetterDots2.png";
import FooterLogo from "../../Assets/FooterLogo.png";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { VscTwitter } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { RiBehanceFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Box
      sx={{ paddingTop: "200px", backgroundColor: palette.navbarBackground }}
    >
      <Box
        sx={{
          backgroundColor: palette.primary,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ padding: "150px 0 50px", position: "relative" }}
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
            <Box>
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
          <Stack direction="row" spacing={4}>
            <Stack spacing={2}>
              <img
                style={{ width: "250px", marginTop: "10px" }}
                src={FooterLogo}
                alt="logo"
              />
              <Typography component="p" variant="p" sx={{ maxWidth: "500px" }}>
                Une plateforme de nouvelle génération, qui promet des soins de
                qualité de la part de votre médecin, même à domicile.
              </Typography>
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
            <Box sx={{ marginTop: "50px !important" }}>
              <Typography component="p" variant="h6" sx={{ mb: 1 }}>
                Address
              </Typography>
              <MyList>
                <ListItemButton disableRipple>
                  <ListItemText primary="Illustration" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Mobile Design" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Motion Graphic" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Web Design" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Development" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="SEO" />
                </ListItemButton>
              </MyList>
            </Box>
            <Box sx={{ marginTop: "50px !important" }}>
              <Typography component="p" variant="h6" sx={{ mb: 1 }}>
                About Us
              </Typography>
              <MyList>
                <ListItemButton disableRipple>
                  <ListItemText primary="Illustration" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Mobile Design" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Motion Graphic" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Web Design" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="Development" />
                </ListItemButton>
                <ListItemButton disableRipple>
                  <ListItemText primary="SEO" />
                </ListItemButton>
              </MyList>
            </Box>
            <Box sx={{ marginTop: "50px !important" }}>
              <Typography
                component="p"
                variant="h6"
                sx={{ mb: 1, textAlign: "right" }}
              >
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button disableRipple>
                  <TiSocialFacebook size="27px" color={palette.whiteText} />
                </Button>
                <Button disableRipple>
                  <VscTwitter size="27px" color={palette.whiteText} />
                </Button>
                <Button disableRipple>
                  <AiFillInstagram size="27px" color={palette.whiteText} />
                </Button>
                <Button disableRipple>
                  <RiBehanceFill size="27px" color={palette.whiteText} />
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
