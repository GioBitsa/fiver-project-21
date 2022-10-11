import React, { useState } from "react";
import {
  MainBox,
  CircleImage,
  PaymentImageContainer,
  LeftPart,
  MainContent,
  MyMainButton,
  CardImageContainer,
  Header,
} from "./Style";
import Ellipse from "../../../Assets/Ellipse.png";
import PaymentImage1 from "../../../Assets/Payment/PaymentImage (1).png";
import PaymentImage2 from "../../../Assets/Payment/PaymentImage (2).png";
import WhiteLogoWithText from "../../../Assets/WhiteLogoWithText.png";
import CardIcon from "../../../Assets/Icons/CardIcon.png";
import CardIconGreen from "../../../Assets/Icons/CardIconGreen.png";
import { Container, IconButton, Stack, Typography, Box } from "@mui/material";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import palette from "../../../Shared/palette";
import { MainButton } from "../../../Components/Common";

const PaymentCard = () => {
  const [active, setActive] = useState("1");

  return (
    <MainBox>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <LeftPart justifyContent="center">
          <Container
            maxWidth="sm"
            sx={{
              position: { xs: "initial", md: "relative" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pb: { xs: 5, md: 0 },
            }}
          >
            <MainContent spacing={5}>
              <Header
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <IconButton disableRipple>
                  <HiOutlineArrowNarrowLeft
                    color={palette.whiteText}
                    size="40px"
                  />
                </IconButton>
                <img src={WhiteLogoWithText} alt="mobilitycare" />
              </Header>
              <Box>
                <Typography component="h3" variant="h3">
                  Consulation terminée
                </Typography>
                <Typography component="p" variant="p">
                  Disposez vous d’une carte Vitale ?
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 2, md: 5 }}
                  alignItems="center"
                  sx={{ mb: 5 }}
                >
                  <MyMainButton
                    className={active === "1" ? "active" : ""}
                    onClick={() => setActive("1")}
                    text="Oui"
                  />
                  <MyMainButton
                    className={active === "2" ? "active" : ""}
                    onClick={() => setActive("2")}
                    text="Non"
                  />
                </Stack>
                <Typography component="p" variant="p">
                  Veuillez insérer votre carte vitale :
                </Typography>
                <CardImageContainer>
                  <img src={CardIcon} alt="card" />
                  <img src={CardIconGreen} alt="card" />
                </CardImageContainer>
                <Typography component="h6" variant="h6">
                  Reste à charge : 0,00€
                </Typography>
              </Box>
              <MainButton
                text="Valider"
                sx={{
                  backgroundColor: {
                    xs: palette.primary,
                    md: palette.whiteText,
                  },
                  color: { xs: palette.color, md: palette.primary },
                  pt: { xs: "10px", md: "15px" },
                  pb: { xs: "10px", md: "15px" },
                  fontWeight: "bold",
                  textTransform: "capitalize",

                  "&:hover": {
                    backgroundColor: palette.whiteText,
                    color: palette.primary,
                  },
                }}
              />
            </MainContent>
          </Container>
        </LeftPart>
        <PaymentImageContainer
          sx={
            active === "1"
              ? {
                  backgroundImage: `url("${PaymentImage1}")`,
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1000px",
                }
              : {
                  backgroundImage: `url("${PaymentImage2}")`,
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }
          }
        >
          <img
            src={active === "1" ? PaymentImage1 : PaymentImage2}
            alt="payment"
          />
        </PaymentImageContainer>
      </Stack>
      <CircleImage src={Ellipse} alt="half circle" />
    </MainBox>
  );
};

export default PaymentCard;
