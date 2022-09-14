import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  HeroImageContainer,
  CommonQuestions,
  StartingSteps,
  Functionalities,
  StrengthSection,
} from "../../Components";
import SolutionHeroImage from "../../Assets/Solution/SolutionHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import { MyImageBox, MyGridItem, GridTitle, SocialButton } from "./Style";
import SolutionSvg1 from "../../Assets/Solution/SolutionSvg (1).png";
import SolutionSvg2 from "../../Assets/Solution/SolutionSvg (2).png";
import SolutionSvg3 from "../../Assets/Solution/SolutionSvg (3).png";
import SolutionSvg4 from "../../Assets/Solution/SolutionSvg (4).png";
import SolutionSvg5 from "../../Assets/Solution/SolutionSvg (5).png";
import SolutionSvg6 from "../../Assets/Solution/SolutionSvg (6).png";
import GooglePlay from "../../Assets/Icons/GooglePlay.png";
import AppStore from "../../Assets/Icons/AppStore.png";

const Solution = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
        >
          <Box>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: { xs: "26px", sm: "38px", md: "33px", lg: "50px" },
                fontWeight: "900",
                lineHeight: { xs: "50px", lg: "70px" },
                color: palette.black,
                mb: 3,
              }}
            >
              MobilityCare <br />
              <Box
                sx={{
                  display: "inline-block",
                  position: "relative",
                  color: palette.primary,
                  mr: 2,
                }}
              >
                <img
                  style={{
                    left: "100%",
                    transform: "translateX(-50%)",
                    top: "-15px",
                  }}
                  className="highLight"
                  src={HighLight}
                  alt="highlight"
                />
                Assistant
              </Box>
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              La télémedecine actuelle est une avancée en santé qui permet de
              répondre à plusieurs problématiques cependant un élément
              primordial semble avoir été négligé : le contact humain. <br />
              Mobility Care place l’humain au centre du soin, c’est pour cette
              raison que nous avons créé le concept de téléconsultation assistée
              pour tous.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              Ainsi, grâce aux assistant(e)s, le soin à domicile assisté par un
              médecin téléconsultant est possible. <br /> Les assistant(e)s
              contribuent à accompagner les personnes à leur domicile, ce qui
              apporte professionalisme, empathie, conseils et bienveillance pour
              que l’activité de télémedecine soit plus humaine que jamais.
            </Typography>
            <Box sx={{ mt: "60px", display: { xs: "none", md: "block" } }}>
              <MainButton text="Télécharger l’application" />
              <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                <SocialButton direction="row" spacing={1}>
                  <img src={GooglePlay} alt="googleplay" />
                  <Box>
                    <Typography component="span" variant="span">
                      Disponible sur
                    </Typography>
                    <Typography component="p" variant="p">
                      Google Play
                    </Typography>
                  </Box>
                </SocialButton>
                <SocialButton direction="row" spacing={1}>
                  <img src={AppStore} alt="app store" />
                  <Box>
                    <Typography component="span" variant="span">
                      Disponible sur
                    </Typography>
                    <Typography component="p" variant="p">
                      App Store
                    </Typography>
                  </Box>
                </SocialButton>
              </Stack>
            </Box>
          </Box>
          <Box>
            <HeroImageContainer
              main={SolutionHeroImage}
              background={HeroImageBackground}
            />
            <Stack
              alignItems="center"
              sx={{ display: { xs: "flex", md: "none" }, mt: 5 }}
            >
              <MainButton
                text="Télécharger l’application"
                sx={{
                  width: "250px",
                }}
              />
              <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                <SocialButton direction="row" spacing={1}>
                  <img src={GooglePlay} alt="googleplay" />
                  <Box>
                    <Typography component="span" variant="span">
                      Disponible sur
                    </Typography>
                    <Typography component="p" variant="p">
                      Google Play
                    </Typography>
                  </Box>
                </SocialButton>
                <SocialButton direction="row" spacing={1}>
                  <img src={AppStore} alt="app store" />
                  <Box>
                    <Typography component="span" variant="span">
                      Disponible sur
                    </Typography>
                    <Typography component="p" variant="p">
                      App Store
                    </Typography>
                  </Box>
                </SocialButton>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Functionalities />
      <StrengthSection />
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: palette.navbarBackground, py: 5, mb: "50px" }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
            textAlign: { xs: "left", md: "center" },
          }}
        >
          Être assistant avec <br /> MobilityCare ?
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.black,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            mt: 2,
            mb: 4,
            textAlign: { xs: "left", md: "center" },
          }}
        >
          Before testing, it is worth reading more detailed information or
          consulting your doctor. The information below is not a guide to action
          and is for informational purposes only
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={SolutionSvg1} alt="website" />
            </MyImageBox>
            <GridTitle>
              Availability of test results anywhere in the world
            </GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              You will receive the test results to your mail in document format
              and to your account
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={SolutionSvg2} alt="patients" />
            </MyImageBox>
            <GridTitle>
              Information about test results is confidential
            </GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Right to dispose of the information received in accordance with
              the current legislation
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={SolutionSvg3} alt="mobility" />
            </MyImageBox>
            <GridTitle>
              Get a doctor's consultation if You have any question{" "}
            </GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Face-to-face or Online you can get a consultation at any testing
              stage
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={SolutionSvg4} alt="care" />
            </MyImageBox>
            <GridTitle>
              Pay for testing online or at the test location
            </GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              After payment, you leave your contact information to receive test
              results
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={SolutionSvg5} alt="easy" />
            </MyImageBox>
            <GridTitle>Sign up for testing</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Fill out the online form.A consultation with a doctor will help
              you to choose the right type of testing
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={SolutionSvg6} alt="reactive" />
            </MyImageBox>
            <GridTitle>Arrive at the appointed time for testing</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Testing is carried out in accordance with the previously selected
              type of testing
            </Typography>
          </MyGridItem>
        </Grid>
        <MainButton
          text="Sign up for a test"
          sx={{ display: "flex", margin: "50px auto 25px", minWidth: "250px" }}
        />
      </Container>
      <StartingSteps
        title="Nos formations adaptées à votre niveau"
        steps={[
          {
            id: 1,
            header: "Infirmier(e)",
            desc: "Completez votre pratique et votre formation pour utiliser au mieux le e-cabinet.",
            button: "S’inscrire",
          },
          {
            id: 2,
            header: "Aide soignant(e)",
            desc: "Montez en compétence et valoriser encore plus votre travail.",
            button: "S’inscrire",
          },
          {
            id: 3,
            header: "Autre",
            desc: "Vous êtes titulaire baccalauréat et vous voulez en faire votre métier.",
            button: "S’inscrire",
          },
        ]}
      />
      <CommonQuestions />
      <Footer />
    </>
  );
};

export default Solution;
