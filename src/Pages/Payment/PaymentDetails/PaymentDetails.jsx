import React from "react";
import {
  MainBox,
  CircleImage,
  Header,
  Content,
  PaymentDetailsContainer,
} from "./Style";
import {
  Container,
  IconButton,
  Grid,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import Ellipse from "../../../Assets/Ellipse.png";
import GreenLogoWithText from "../../../Assets/GreenLogoWithText.png";
import CreditCard from "../../../Assets/CreditCard.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import palette from "../../../Shared/palette";
import { MainButton } from "../../../Components/Common";

const paymentDetailsArray = [
  {
    name: "Payment amount",
    amount: "39.50 €",
  },
  {
    name: "Amount toward deductible",
    amount: "+0.00 €",
  },
  {
    name: "Coinsurance (0%)",
    amount: "+0.00 €",
  },
  {
    name: "Co-payment",
    amount: "+0.00 €",
    divider: true,
  },
  {
    name: "Total deductible",
    amount: "+0.00 €",
    divider: true,
  },
  {
    name: "Total Payment",
    amount: "39.50 €",
  },
  {
    name: "VAT + TAX",
    amount: "+4.50 €",
    divider: true,
  },
];

const PaymentDetails = () => {
  return (
    <MainBox>
      <Container maxWidth="lg">
        <Header direction="row" spacing={3} alignItems="center">
          <IconButton disableRipple>
            <HiOutlineArrowNarrowLeft />
          </IconButton>
          <img src={GreenLogoWithText} alt="mobilitycare" />
        </Header>
        <Content container spacing={{ xs: 3, md: 5 }}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: {
                  xs: `${palette.primary} !important`,
                  md: `${palette.blackText} !important`,
                },
              }}
            >
              Master Card
            </Typography>
            <img src={CreditCard} alt="credit card" />
            <Typography component="h2" variant="h2">
              Payment Amount: 39.50€/month
            </Typography>
            <Typography component="p" variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              volutpat, proin leo ultricies. Quam porttitor amet dolor, arcu
              pellentesque risus adipiscing neque nisl. A tempor auctor ultrices
              quis augue.
            </Typography>
            <Typography component="p" variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              volutpat, proin leo ultricies. Quam porttitor amet dolor, arcu
              pellentesque risus adipiscing neque nisl. A tempor auctor ultrices
              quis augue.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaymentDetailsContainer justifyContent="space-between" spacing={2}>
              <Typography component="h3" variant="h3">
                Payment Details
              </Typography>
              {paymentDetailsArray?.map((item, index) => (
                <>
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography component="h6" variant="h6">
                      {item.name}
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      {item.amount}
                    </Typography>
                  </Stack>
                  {item.divider && <Divider />}
                </>
              ))}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography component="h5" variant="h5">
                  Grand Total
                </Typography>
                <Typography component="h5" variant="h5">
                  44.00 €
                </Typography>
              </Stack>
            </PaymentDetailsContainer>
          </Grid>
          <Grid item xs={12}>
            <MainButton
              text="Pay Now"
              sx={{
                width: "100%",
                background: palette.linearVerticaly,
                fontWeight: "bold",
                py: "12px",
              }}
            />
          </Grid>
        </Content>
      </Container>
      <CircleImage src={Ellipse} alt="half circle" />
    </MainBox>
  );
};

export default PaymentDetails;
