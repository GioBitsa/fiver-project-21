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
import { Container, IconButton, Typography, Box } from "@mui/material";
import ChooseCardImage from "../../../Assets/Payment/ChooseCardImage.png";
import ChooseCardImageSmall from "../../../Assets/Payment/ChooseCardImageSmall.png";
import WhiteLogoWithText from "../../../Assets/WhiteLogoWithText.png";
import NewsLetterDots2 from "../../../Assets/NewsLetterDots2.png";
import MasterCard from "../../../Assets/Icons/MasterCard.png";
import Visa from "../../../Assets/Icons/Visa.png";
import CardType1 from "../../../Assets/Icons/CardType (1).png";
import CardType2 from "../../../Assets/Icons/CardType (2).png";
import Ellipse from "../../../Assets/Ellipse.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import palette from "../../../Shared/palette";

const cardTypeArray = [
  {
    src: MasterCard,
    title: "Master Card",
    desc: "**** **** **** **** 5640  12/26",
    default: true,
  },
  {
    src: Visa,
    title: "VISA Card",
    desc: "**** **** **** **** 5640  12/26",
  },
  {
    src: CardType1,
    title: "Google pay",
    desc: "**** **** **** **** 5640  12/26",
  },
  {
    src: CardType2,
    title: "Payoneer card",
    desc: "**** **** **** **** 5640  12/26",
  },
];

const ChooseCard = () => {
  const [active, setActive] = useState("0");

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
          <MyStack justifyContent="center" spacing={2}>
            <Typography component="h3" variant="h3">
              Credit Card
            </Typography>
            <Typography component="p" variant="p">
              Choose your credit card for make your payment
            </Typography>
            {cardTypeArray?.map((item, index) => (
              <MyChooseButton
                key={index}
                className={
                  item.default && active === "0"
                    ? "active"
                    : active === index
                    ? "active"
                    : ""
                }
                onClick={() => setActive(index)}
              >
                <img src={item.src} alt="card" />
                <Box>
                  <Typography component="h6" variant="h6">
                    {item.title}
                  </Typography>
                  <Typography component="p" variant="p">
                    {item.desc}
                  </Typography>
                </Box>
                <span />
              </MyChooseButton>
            ))}
            <Typography component="p" variant="p">
              Payment Amount: <span>39.50€</span>
            </Typography>
            <MyMainButton text="Continue" />
          </MyStack>
        </Container>
      </Content>
      <MainImageContainer>
        <img className="main" src={ChooseCardImage} alt="choose" />
        <img className="main small" src={ChooseCardImageSmall} alt="choose" />
        <img className="dots" src={NewsLetterDots2} alt="dots" />
        <img className="ellipse" src={Ellipse} alt="ellipse" />
      </MainImageContainer>
      <CircleImage src={Ellipse} alt="half circle" />
    </MainBox>
  );
};

export default ChooseCard;
