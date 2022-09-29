import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import palette from "../../Shared/palette";
import HighLight from "../../Assets/HighLight.png";
import Dots from "../../Assets/Tarif/Dots.png";
import {
  Title,
  MyButton,
  BackgroundNumberImage,
  MainImage,
  Content,
  DotsImage,
  DotsContainer,
} from "./Style";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TarifHeroSection = ({
  mainImage,
  backgroundImage,
  title,
  desc,
  paymentTitle,
  firstButton,
  secondButton,
  activeDot,
  activeButton,
  setActiveButton,
}) => {
  const navigate = useNavigate();

  const onChange = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 5, position: "relative" }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            display: { xs: "block", md: "none" },
            color: palette.primary,
            fontSize: "30px",
            fontWeight: "600",
            mb: 2,
          }}
        >
          MobilityCare
        </Typography>
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
          Nos tarifs et{" "}
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
            services
          </Box>
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{ maxWidth: "700px", color: palette.blackText, opacity: 0.8 }}
        >
          Nous proposons de la location ou de la vente de nos dispositifs afin
          de pouvoir vous proposez des solutions qui sont les plus adaptées a
          votre budget. <br /> De plus, vous pouvez bénéficiez ou souscrire à
          des services complémentaires pour que vos prestations soient optimales
          et ainsi ne vous préoccuper que de vos patients/résidents/habitants.
        </Typography>
        <DotsImage src={Dots} alt="dots" />
      </Container>
      <Box
        sx={{
          background: palette.linearVerticaly,
          py: 5,
          position: "relative",
          mb: { xs: "50px", md: "100px" },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            sx={{ position: "relative" }}
          >
            <MainImage src={mainImage} alt="tarif" />
            <Content>
              <Title component="h2" variant="h2">
                {title}
              </Title>
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: palette.whiteText,
                  opacity: 0.8,
                  mt: 1,
                  mb: 3,
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {desc}
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                sx={{ color: palette.whiteText, opacity: 0.8, mt: 1, mb: 3 }}
              >
                {paymentTitle}
              </Typography>
              <Stack direction="row" spacing={3}>
                <MyButton onClick={() => onChange("1")}>
                  <span className={activeButton === "1" ? "active" : ""}>
                    <MdDone />
                  </span>
                  {firstButton}
                </MyButton>
                <MyButton onClick={() => onChange("2")}>
                  <span className={activeButton === "2" ? "active" : ""}>
                    <MdDone />
                  </span>
                  {secondButton}
                </MyButton>
              </Stack>
            </Content>
          </Stack>
          <BackgroundNumberImage src={backgroundImage} alt="tarif" />
        </Container>
        <DotsContainer>
          <span
            className={activeDot === "1" ? "active" : ""}
            onClick={() => navigate("/firsttarif")}
          />
          <span
            className={activeDot === "2" ? "active" : ""}
            onClick={() => navigate("/secondtarif")}
          />
          <span
            className={activeDot === "3" ? "active" : ""}
            onClick={() => navigate("/thirdtarif")}
          />
        </DotsContainer>
      </Box>
    </>
  );
};

export default TarifHeroSection;
