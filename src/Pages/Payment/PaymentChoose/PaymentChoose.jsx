import React, { useState } from "react";
import {
  MainBox,
  Content,
  MainImageContainer,
  Header,
  CircleImage,
  MyStack,
  MyChooseButton,
  MyMainButton,
} from "./Style";
import { Container, IconButton, Typography } from "@mui/material";
import PaymentChooseImage from "../../../Assets/Payment/PaymentChooseImage.png";
import WhiteLogoWithText from "../../../Assets/WhiteLogoWithText.png";
import NewsLetterDots2 from "../../../Assets/NewsLetterDots2.png";
import CardIcon from "../../../Assets/Icons/CardIcon.png";
import CardIconGreen from "../../../Assets/Icons/CardIconGreen.png";
import PayOnline from "../../../Assets/Icons/PayOnline.png";
import PayOnlineGreen from "../../../Assets/Icons/PayOnlineGreen.png";
import Ellipse from "../../../Assets/Ellipse.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import palette from "../../../Shared/palette";

const PaymentChoose = () => {
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
              Payment Method
            </Typography>
            <Typography component="p" variant="p">
              Choose your payment method
            </Typography>
            <MyChooseButton
              className={active === "1" ? "active" : ""}
              onClick={() => setActive("1")}
            >
              <img src={CardIcon} alt="card" />
              <img src={CardIconGreen} alt="card" />
              <Typography component="h6" variant="h6">
                Pay with Card
              </Typography>
            </MyChooseButton>
            <MyChooseButton
              className={active === "2" ? "active" : ""}
              onClick={() => setActive("2")}
            >
              <img src={PayOnline} alt="pay online" />
              <img src={PayOnlineGreen} alt="pay online" />
              <Typography component="h6" variant="h6">
                Pay Online
              </Typography>
            </MyChooseButton>
            <Typography component="p" variant="p">
              Payment Amount: <span>39.50€</span>
            </Typography>
            <MyMainButton text="Continue" />
          </MyStack>
        </Container>
      </Content>
      <MainImageContainer>
        <img className="main" src={PaymentChooseImage} alt="choose" />
        <img className="dots" src={NewsLetterDots2} alt="dots" />
        <img className="ellipse" src={Ellipse} alt="ellipse" />
      </MainImageContainer>
      <CircleImage src={Ellipse} alt="half circle" />
    </MainBox>
  );
};

export default PaymentChoose;
