import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  HeroImageContainer,
  CommonQuestions,
  StartingSteps,
  Functionalities,
} from "../../Components";
import SolutionHeroImage from "../../Assets/Solution/SolutionHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import { MainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import { MyImageBox, MyGridItem, GridTitle, RightButton } from "./Style";
import MedicineSvg1 from "../../Assets/Medicine/MedicineSvg (1).png";
import MedicineSvg2 from "../../Assets/Medicine/MedicineSvg (2).png";
import MedicineSvg3 from "../../Assets/Medicine/MedicineSvg (3).png";
import MedicineSvg4 from "../../Assets/Medicine/MedicineSvg (4).png";
import MedicineSvg5 from "../../Assets/Medicine/MedicineSvg (5).png";
import MedicineSvg6 from "../../Assets/Medicine/MedicineSvg (6).png";
import MedicineVideoPreview from "../../Assets/Medicine/MedicineVideoPreview.png";
import { BsChevronRight } from "react-icons/bs";

const Solution = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5 }}>
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
              Notre solution vous ont gagner un temps précieux. Elle vous permet
              de désengorger votre cabinet médical pour des pathologies
              bénignes, de consulter vos patients (à domicile) pour lesquels
              vous ne pouvez plus vous déplacer ,de partager plus rapidement et
              efficacement les informations entre les professionnels... <br />{" "}
              Notre concept se veut être une pratique différente de la médecine
              et non pas une alternative à la médecine actuelle.
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: palette.primary,
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "28px", md: "34px", lg: "38px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              100% Gratuit
            </Typography>
          </Box>
          <HeroImageContainer
            main={SolutionHeroImage}
            background={HeroImageBackground}
          />
        </Stack>
      </Container>
      <Functionalities />
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
              <img src={MedicineSvg1} alt="website" />
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
              <img src={MedicineSvg2} alt="patients" />
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
              <img src={MedicineSvg3} alt="mobility" />
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
              <img src={MedicineSvg4} alt="care" />
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
              <img src={MedicineSvg5} alt="easy" />
            </MyImageBox>
            <GridTitle>Sign up for testing</GridTitle>
            <Typography sx={{ color: palette.blackText }} align="center">
              Fill out the online form.A consultation with a doctor will help
              you to choose the right type of testing
            </Typography>
          </MyGridItem>
          <MyGridItem item xs={12} md={4}>
            <MyImageBox>
              <img src={MedicineSvg6} alt="reactive" />
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
