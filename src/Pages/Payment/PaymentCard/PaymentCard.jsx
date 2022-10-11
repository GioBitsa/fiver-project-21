import React, { useState } from "react";
import {
  MainBox,
  CircleImage,
  MyMainButton,
  MyChooseButton,
  CardImageContainer,
  Header,
  Content,
  MainImageContainer,
  MyStack,
} from "./Style";
import Ellipse from "../../../Assets/Ellipse.png";
import PaymentImage1 from "../../../Assets/Payment/PaymentImage (1).png";
import PaymentImage2 from "../../../Assets/Payment/PaymentImage (2).png";
import WhiteLogoWithText from "../../../Assets/WhiteLogoWithText.png";
import CardIcon from "../../../Assets/Icons/CardIcon.png";
import NewsLetterDots2 from "../../../Assets/NewsLetterDots2.png";
import CardIconGreen from "../../../Assets/Icons/CardIconGreen.png";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import palette from "../../../Shared/palette";

const PaymentCard = () => {
  const [active, setActive] = useState("1");

  return (
    <MainBox>
      <Content>
        <Container
          maxWidth="sm"
          sx={{
            position: { xs: "initial", md: "relative" },
            height: "100%",
          }}
        >
          <Header
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton disableRipple>
              <HiOutlineArrowNarrowLeft color={palette.whiteText} size="40px" />
            </IconButton>
            <img src={WhiteLogoWithText} alt="mobilitycare" />
          </Header>
          <MyStack justifyContent="center" spacing={3}>
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
              <MyChooseButton
                className={active === "1" ? "active" : ""}
                onClick={() => setActive("1")}
                text="Oui"
              />
              <MyChooseButton
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
            <MyMainButton text="Valider" />
          </MyStack>
        </Container>
      </Content>
      <MainImageContainer>
        {active === "1" ? (
          <img className="main first" src={PaymentImage1} alt="payment 1" />
        ) : (
          <img className="main second" src={PaymentImage2} alt="payment 2" />
        )}
        <img className="dots" src={NewsLetterDots2} alt="dots" />
        <img className="ellipse" src={Ellipse} alt="ellipse" />
      </MainImageContainer>
      <CircleImage src={Ellipse} alt="half circle" />
    </MainBox>
  );
};

export default PaymentCard;
